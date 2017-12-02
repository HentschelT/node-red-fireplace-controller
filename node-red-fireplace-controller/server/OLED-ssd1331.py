#!/usr/bin/python
'''
Created on Nov 27, 2017

@author: thomashentschel
'''

from __future__ import unicode_literals

import socket
import sys
import os
import time

import json

import luma.oled.device as oled
import luma.core.interface.serial as interface
from luma.core.render import canvas
from PIL import ImageFont
from numpy.f2py.auxfuncs import throw_error

server_address = ('localhost', 5674)
fonts = {}
symbolfonts = {}
symbols = {}

def make_font(name, size):
    font_path = os.path.abspath(os.path.join(
        os.path.dirname(__file__), 'fonts', name))
    return ImageFont.truetype(font_path, size)

def initFonts():
    fontName = "concertone-regular.ttf"
    for size in range(8, 60):
        fonts[size] = make_font(fontName, size)

    symbolfontName = "fontawesome-webfont.ttf"
    for size in range(8, 60):
        symbolfonts[size] = make_font(symbolfontName, size)
    
    symbols['thermo-0'] = "\uf2cb"
    symbols['thermo-1'] = "\uf2ca"
    symbols['thermo-2'] = "\uf2c9"
    symbols['thermo-3'] = "\uf2c8"
    symbols['thermo-4'] = "\uf2c7"

    symbols['caret-up'] = "\uf151"
    symbols['caret-down'] = "\uf150"
    
    symbols['network'] = "\uf1eb"
    symbols['wifi'] = "\uf1eb"
    symbols['bolt'] = "\uf0e7"
    symbols['power'] = "\uf011"
    symbols['check'] = "\uf00c"
    symbols["cloud"] = "\uf0c2"
    symbols["connected"] = "\uf0c2"
    symbols['incoming'] = "\uf0ed"
    symbols['outgoing'] = "\uf0ee"

def initSocket():
    # Make sure the socket does not already exist
#    try:
#        os.unlink(server_address)
#    except OSError:
#        if os.path.exists(server_address):
#            raise
    
    # Create a uds
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    # Bind the socket to the port
    print 'starting up on %s' % str(server_address)
    sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
    sock.bind(server_address)
    
    # Listen for incoming connections
    sock.listen(1)
    return sock

def initOLED():
    
    serial = interface.spi(
        port=0,
        device=0,
        bus_speed_hz=8000000,
        gpio_DC=24,
        gpio_RST=25)
    
    device = oled.ssd1331(serial, 
                    width=96, 
                    height=64,
                    rotate=3)
    return device

def clear(disp, msg ):
    print 'clear'
    print msg['bg']
    bg = msg['bg']
    top = 1
    bottom = disp.height - 2
    left = 1
    right = disp.width - 2
    with canvas(disp) as draw:
        draw.rectangle(disp.bounding_box, 
                       outline=bg)
    
    return '{"result": "ok"}'

def symbol(disp, draw, msg ):
    fg = msg['fg']
    px = int(msg['x'])
    py = int(msg['y'])
    font = symbolfonts[14]
    if 'size' in msg:
        fontsize = int(msg['size'])
        if fontsize in symbolfonts:
            font = symbolfonts[fontsize]
    symbol = msg['text']
    if symbol in symbols:
        code = symbols[symbol]
        draw.text((px, py), text=code, fill=fg, font=font)
    
def write(disp, draw, msg ):
    fg = msg['fg']
    px = int(msg['x'])
    py = int(msg['y'])
    font = fonts[14]
    if 'size' in msg:
        fontsize = int(msg['size'])
        if fontsize in fonts:
            font = fonts[fontsize]
    text = msg['text']
    
#    size = draw.textsize(text)
#   draw.rectangle((px, py, px + size[0], py + size[1]), fill="black")
    draw.text((px, py), text, fill=fg, font=font)
    
def bounds(disp, draw, msg ):
    bg = msg['bg']
    fg = msg['fg']
    draw.rectangle(disp.bounding_box,
                   fill=bg,
                   outline=fg)
    
def dispatch(cmd):
    return {
        'write': write,
        'bounds': bounds,
        'symbol': symbol
        }[cmd]
    
def interpreter(disp, cmds ):
    with canvas(disp) as draw:
        for cmd in cmds:
            token = cmd['cmd']
            dispatch(token)(disp, draw, cmd)

    return '{"result": "ok"}'

def handle( disp, msg ):
    print msg
    reply = '{"result": "unknown"}'
    if( msg.count('{') == 0 ):
        return '{"result": "empty"}'
    
    pymsg = json.loads(msg)
    if "cmds" in pymsg:
        reply = interpreter(disp, pymsg['cmds'])
    if "clear" in pymsg:
        reply = clear(disp, pymsg)
    return reply

def main():
    initFonts()
    sock = initSocket()
    disp = initOLED()
    disp.clear()
    
    while True:
        # Wait for a connection
        print >>sys.stderr, 'waiting for a connection'

        try:
            connection, client_address = sock.accept()
        except KeyboardInterrupt:
            print "kbd caught, closing in accept"
            sock.close()
            break
        
        level = 0
        blevel = 0
        msg = ''
        try:
            print >>sys.stderr, 'connection from', client_address
            
            while True:
                data = connection.recv(2048)
                if data:
                    level = level + data.count('{') - data.count('}');
                    blevel = blevel + data.count('[') - data.count(']');
                    msg += data
                    if(level == 0 and blevel == 0):
                        try: 
                            reply = handle(disp, msg)
                            connection.sendall(reply)
                            msg = ''
                        except KeyboardInterrupt as e:
                            print "kbd caught, rethrow"
                            raise e
                        except: 
                            e0 = sys.exc_info()[0]
                            e1 = sys.exc_info()[1]
                            reply = '{"result": "error", "reason": "%s [%s]"}' % (e0 , e1)
                            connection.sendall(reply)
                            msg =''
                else:
                    print >>sys.stderr, 'no more data from', client_address
                    break
                
        except KeyboardInterrupt:
            print "kbd (re)caught, closing server"
            sock.shutdown(socket.SHUT_RDWR)
            sock.close()
            break
        finally:
            print "closing existing connection"
            connection.close()
   
if __name__ == '__main__':
    main()