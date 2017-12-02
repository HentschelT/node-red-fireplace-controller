[
    {
        "id": "9ba019b1.949b68",
        "type": "tab",
        "label": "Panel",
        "disabled": false,
        "info": ""
    },
    {
        "id": "df8affe2.2a80f",
        "type": "tab",
        "label": "External",
        "disabled": false,
        "info": ""
    },
    {
        "id": "f79455b3.47eaa8",
        "type": "tab",
        "label": "Model",
        "disabled": false,
        "info": ""
    },
    {
        "id": "426cacd1.2cdb44",
        "type": "subflow",
        "name": "Subflow 1",
        "info": "",
        "in": [
            {
                "x": 200,
                "y": 260,
                "wires": [
                    {
                        "id": "b83be319.ad9fe"
                    }
                ]
            }
        ],
        "out": [
            {
                "x": 520,
                "y": 260,
                "wires": [
                    {
                        "id": "b83be319.ad9fe",
                        "port": 0
                    }
                ]
            }
        ]
    },
    {
        "id": "dd635725.deed88",
        "type": "nodebot",
        "z": "",
        "name": "raspi01",
        "username": "",
        "password": "",
        "boardType": "raspi-io",
        "serialportName": "",
        "connectionType": "local",
        "mqttServer": "",
        "socketServer": "",
        "pubTopic": "",
        "subTopic": "",
        "tcpHost": "",
        "tcpPort": "",
        "sparkId": "",
        "sparkToken": "",
        "beanId": "",
        "impId": "",
        "meshbluServer": "https://meshblu.octoblu.com",
        "uuid": "",
        "token": "",
        "sendUuid": ""
    },
    {
        "id": "a678595b.f9cba8",
        "type": "mqtt-broker",
        "z": "",
        "broker": "ohab.home.hentschel.net",
        "port": "1883",
        "clientid": "",
        "usetls": false,
        "compatmode": true,
        "keepalive": "60",
        "cleansession": true,
        "willTopic": "",
        "willQos": "0",
        "willPayload": "",
        "birthTopic": "",
        "birthQos": "0",
        "birthPayload": ""
    },
    {
        "id": "3057fee5.7a5c12",
        "type": "debug",
        "z": "9ba019b1.949b68",
        "name": "disp",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 930,
        "y": 380,
        "wires": []
    },
    {
        "id": "cada9d93.f02e9",
        "type": "tcp request",
        "z": "9ba019b1.949b68",
        "server": "localhost",
        "port": "5674",
        "out": "sit",
        "splitc": " ",
        "name": "luma.oled",
        "x": 620,
        "y": 340,
        "wires": [
            [
                "ee58b789.c35088"
            ]
        ]
    },
    {
        "id": "ee58b789.c35088",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "recv",
        "func": "msg.payload = msg.payload.toString();\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 770,
        "y": 340,
        "wires": [
            [
                "53d2ab91.e44474",
                "3057fee5.7a5c12"
            ]
        ]
    },
    {
        "id": "4bc59898.71ade8",
        "type": "template",
        "z": "9ba019b1.949b68",
        "name": "main screen ",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{ \"cmds\": [\n\t{ \"cmd\": \"bounds\", \"bg\": \"white\", \"fg\": \"white\" },\n\t{ \"cmd\": \"symbol\", \"fg\": \"{{payload.display.networkcolor}}\", \"size\": \"10\", \"x\": \"50\", \"y\": \"0\", \"text\": \"{{payload.display.network}}\" },\n\t{ \"cmd\": \"write\", \"fg\": \"black\", \"size\": \"26\", \"x\": \"0\", \"y\": \"5\", \"text\": \"{{payload.display.mode}}\" },\n\t{ \"cmd\": \"write\", \"fg\": \"black\", \"x\": \"2\", \"y\": \"28\", \"text\": \"{{payload.display.set}}\" },\n\t{ \"cmd\": \"write\", \"fg\": \"{{payload.display.heatcolor}}\", \"size\": \"44\", \"x\": \"1\", \"y\": \"46\", \"text\": \"{{payload.display.current}}\" },\n\t{ \"cmd\": \"write\", \"fg\": \"{{payload.display.heatcolor}}\", \"size\": \"20\", \"x\": \"46\", \"y\": \"68\", \"text\": \".{{payload.display.currentdecimal}}\" },\n\t{ \"cmd\": \"symbol\", \"fg\": \"{{payload.display.heatcolor}}\", \"size\": \"20\", \"x\": \"50\", \"y\": \"48\", \"text\": \"{{payload.display.thermo}}\" }\n\t]\n}\n",
        "output": "str",
        "x": 410,
        "y": 340,
        "wires": [
            [
                "cada9d93.f02e9"
            ]
        ]
    },
    {
        "id": "49da077a.e4e648",
        "type": "inject",
        "z": "9ba019b1.949b68",
        "name": "refresh",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 90,
        "y": 400,
        "wires": [
            [
                "bbfd8fb3.20033"
            ]
        ]
    },
    {
        "id": "af5cfa0.0fbcb08",
        "type": "rpi-gpio in",
        "z": "9ba019b1.949b68",
        "name": "Button 1",
        "pin": "16",
        "intype": "down",
        "debounce": "25",
        "read": true,
        "x": 80,
        "y": 660,
        "wires": [
            [
                "d6120173.fbbc7"
            ]
        ]
    },
    {
        "id": "53d2ab91.e44474",
        "type": "json",
        "z": "9ba019b1.949b68",
        "name": "",
        "pretty": true,
        "x": 930,
        "y": 340,
        "wires": [
            []
        ]
    },
    {
        "id": "dadf94f5.62be08",
        "type": "rpi-gpio out",
        "z": "9ba019b1.949b68",
        "name": "Fireplace Relay",
        "pin": "37",
        "set": true,
        "level": "0",
        "freq": "",
        "out": "out",
        "x": 920,
        "y": 120,
        "wires": []
    },
    {
        "id": "e47a6dd0.ef413",
        "type": "inject",
        "z": "9ba019b1.949b68",
        "name": "On",
        "topic": "",
        "payload": "1",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 750,
        "y": 80,
        "wires": [
            [
                "dadf94f5.62be08"
            ]
        ]
    },
    {
        "id": "274d7658.87e3ca",
        "type": "inject",
        "z": "9ba019b1.949b68",
        "name": "Off",
        "topic": "",
        "payload": "0",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 750,
        "y": 160,
        "wires": [
            [
                "dadf94f5.62be08"
            ]
        ]
    },
    {
        "id": "b35f7365.1ef08",
        "type": "rpi-gpio in",
        "z": "9ba019b1.949b68",
        "name": "Button 2",
        "pin": "15",
        "intype": "down",
        "debounce": "25",
        "read": true,
        "x": 80,
        "y": 720,
        "wires": [
            [
                "d7934aeb.d86158"
            ]
        ]
    },
    {
        "id": "f2394937.decd08",
        "type": "rpi-gpio in",
        "z": "9ba019b1.949b68",
        "name": "Button 3",
        "pin": "13",
        "intype": "down",
        "debounce": "25",
        "read": true,
        "x": 80,
        "y": 780,
        "wires": [
            [
                "e4e3038c.d5869"
            ]
        ]
    },
    {
        "id": "3ae2ef19.7c1f7",
        "type": "rpi-gpio in",
        "z": "9ba019b1.949b68",
        "name": "Button 4",
        "pin": "11",
        "intype": "down",
        "debounce": "25",
        "read": true,
        "x": 76,
        "y": 840,
        "wires": [
            [
                "18f3bdc.805f342"
            ]
        ]
    },
    {
        "id": "5ca901be.d5a7",
        "type": "inject",
        "z": "f79455b3.47eaa8",
        "name": "initialize",
        "topic": "",
        "payload": "{\"controller\":{\"display\":{\"current\":\"\",\"currentdecimal\":\"\",\"set\":\"\",\"heatcolor\":\"black\",\"thermo\":\"\",\"mode\":\"\",\"network\":\"\",\"networkcolor\":\"red\",\"update\":true},\"button1\":{\"state\":0,\"lastOn\":0,\"lastOff\":0},\"button2\":{\"state\":0,\"lastOn\":0,\"lastOff\":0},\"button3\":{\"state\":0,\"lastOn\":0,\"lastOff\":0},\"button4\":{\"state\":0,\"lastOn\":0,\"lastOff\":0},\"thermostat\":{\"setpoint\":68,\"temp\":0,\"max\":80,\"min\":60,\"deadband\":1.5},\"relay\":{\"setpoint\":0,\"state\":0,\"lastOn\":0,\"lastOff\":0},\"mode\":\"off\",\"network\":\"off\"}}",
        "payloadType": "json",
        "repeat": "",
        "crontab": "",
        "once": true,
        "x": 120,
        "y": 760,
        "wires": [
            [
                "3f9cacdd.b37684",
                "235cb832.9efd58"
            ]
        ]
    },
    {
        "id": "235cb832.9efd58",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "set global context",
        "func": "var controller = msg.payload.controller;\n\n// controller.button1.lastOn = Date.now();\n// controller.button1.lastOff = Date.now();\n// controller.button2.lastOn = Date.now();\n// controller.button2.lastOff = Date.now();\n// controller.button3.lastOn = Date.now();\n// controller.button3.lastOff = Date.now();\n// controller.button4.lastOn = Date.now();\n// controller.button4.lastOff = Date.now();\n\nvar foo = {\n    \n};\n\nvar modes = {};\nmodes[\"off\"] = {\n        \"disp\": \"Off\",\n        \"next\": \"local\"\n    };\nmodes[\"local\"] = {\n        \"disp\": \"Local\",\n        \"next\": \"remote\"\n    }; \nmodes[\"remote\"] = {\n        \"disp\": \"House\",\n        \"next\": \"web\"\n    };\nmodes[\"web\"] = {\n        \"disp\": \"Web\",\n        \"next\": \"on\"\n    };\nmodes[\"on\"] = {\n        \"disp\": \"On\",\n        \"next\": \"off\"\n    }; \n\nglobal.set(\"controlmodes\", modes);\nglobal.set(\"controller\", controller);\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 350,
        "y": 760,
        "wires": [
            [
                "c1d99d8.3bddc6"
            ]
        ]
    },
    {
        "id": "59b990b0.ee488",
        "type": "inject",
        "z": "f79455b3.47eaa8",
        "name": "dump",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 110,
        "y": 60,
        "wires": [
            [
                "cb71bdd.785b64"
            ]
        ]
    },
    {
        "id": "cb71bdd.785b64",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "get controller",
        "func": "msg.payload = global.get(\"controller\");\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 270,
        "y": 60,
        "wires": [
            [
                "325e37c8.747088"
            ]
        ]
    },
    {
        "id": "d6120173.fbbc7",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "update glob",
        "func": "var state = msg.payload;\nvar controller = global.get(\"controller\");\n\nvar button = controller.button1;\n\nbutton.state = state;\nif(state === 0) {\n    button.lastOff = Date.now();\n}\nif(state === 1) {\n    button.lastOn = Date.now();\n}\n\nmsg.device = \"button1\"\nmsg.payload = button;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 660,
        "wires": [
            [
                "fa5b18c3.b42718"
            ]
        ]
    },
    {
        "id": "d7934aeb.d86158",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "update glob",
        "func": "var state = msg.payload;\nvar controller = global.get(\"controller\");\n\nvar button = controller.button2;\n\nbutton.state = state;\nif(state === 0) {\n    button.lastOff = Date.now();\n}\nif(state === 1) {\n    button.lastOn = Date.now();\n}\n\nmsg.device = \"button2\"\nmsg.payload = button;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 720,
        "wires": [
            [
                "fa5b18c3.b42718"
            ]
        ]
    },
    {
        "id": "e4e3038c.d5869",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "update glob",
        "func": "var state = msg.payload;\nvar controller = global.get(\"controller\");\n\nvar button = controller.button3;\n\nbutton.state = state;\nif(state === 0) {\n    button.lastOff = Date.now();\n}\nif(state === 1) {\n    button.lastOn = Date.now();\n}\n\nmsg.device = \"button3\"\nmsg.payload = button;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 780,
        "wires": [
            [
                "fa5b18c3.b42718"
            ]
        ]
    },
    {
        "id": "18f3bdc.805f342",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "update glob",
        "func": "var state = msg.payload;\nvar controller = global.get(\"controller\");\n\nvar button = controller.button4;\n\nbutton.state = state;\nif(state === 0) {\n    button.lastOff = Date.now();\n}\nif(state === 1) {\n    button.lastOn = Date.now();\n}\n\nmsg.device = \"button4\"\nmsg.payload = button;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 230,
        "y": 840,
        "wires": [
            [
                "fa5b18c3.b42718"
            ]
        ]
    },
    {
        "id": "fa5b18c3.b42718",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "long/short?",
        "func": "var button = msg.payload;\n// if first time run, ignore this\nif(button.lastOff === 0 || button.lastOn === 0){\n    return msg;\n}\n\n// figure out long/short press\nif(button.state === 0) {\n    button.clickdone = true;\n    if( button.lastOff - button.lastOn > 3000 ) {\n        button.longclick = true;\n    } else {\n        button.longclick = false;\n    }\n}\nif(button.state === 1) {\n    button.clickdone = false;\n    button.longclick = undefined;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 450,
        "y": 700,
        "wires": [
            [
                "90f5701b.d6be5"
            ]
        ]
    },
    {
        "id": "90f5701b.d6be5",
        "type": "switch",
        "z": "9ba019b1.949b68",
        "name": "buttons",
        "property": "device",
        "propertyType": "msg",
        "rules": [
            {
                "t": "eq",
                "v": "button1",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "button2",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "button3",
                "vt": "str"
            },
            {
                "t": "eq",
                "v": "button4",
                "vt": "str"
            }
        ],
        "checkall": "true",
        "outputs": 4,
        "x": 640,
        "y": 820,
        "wires": [
            [
                "502448ac.0214c8"
            ],
            [
                "343d05f8.82980a"
            ],
            [],
            [
                "5f493ad0.ffdec4"
            ]
        ]
    },
    {
        "id": "343d05f8.82980a",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "Set Temp up?",
        "func": "// the up button (button 2)\nvar button = msg.payload;\n\nmsg.payload = false;\nif(button.clickdone && !button.longclick) {\n    msg.payload = true;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 840,
        "y": 820,
        "wires": [
            [
                "e21c0b93.a8e338"
            ]
        ]
    },
    {
        "id": "5f493ad0.ffdec4",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "Set Temp down?",
        "func": "\n// the down button (button 4)\nvar button = msg.payload;\n\nmsg.payload = false;\nif(button.clickdone && !button.longclick) {\n    msg.payload = true;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 850,
        "y": 900,
        "wires": [
            [
                "47fbcc79.874824"
            ]
        ]
    },
    {
        "id": "e21c0b93.a8e338",
        "type": "link out",
        "z": "9ba019b1.949b68",
        "name": "temp up",
        "links": [
            "bd3dd920.679828"
        ],
        "x": 975,
        "y": 820,
        "wires": []
    },
    {
        "id": "47fbcc79.874824",
        "type": "link out",
        "z": "9ba019b1.949b68",
        "name": "temp down",
        "links": [
            "c92c5b5.7a668a8"
        ],
        "x": 975,
        "y": 900,
        "wires": []
    },
    {
        "id": "bd3dd920.679828",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "temp up",
        "links": [
            "e21c0b93.a8e338"
        ],
        "x": 55,
        "y": 480,
        "wires": [
            [
                "239ec148.1a514e"
            ]
        ]
    },
    {
        "id": "c92c5b5.7a668a8",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "temp down",
        "links": [
            "47fbcc79.874824"
        ],
        "x": 55,
        "y": 520,
        "wires": [
            [
                "344857c0.9cab58"
            ]
        ]
    },
    {
        "id": "502448ac.0214c8",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "Change mode?",
        "func": "// the mode button (button 1)\nvar button = msg.payload;\n\nmsg.payload = false;\nif(button.clickdone && !button.longclick) {\n    msg.payload = true;\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 840,
        "y": 780,
        "wires": [
            [
                "3ef26a38.77bd66"
            ]
        ]
    },
    {
        "id": "3ef26a38.77bd66",
        "type": "link out",
        "z": "9ba019b1.949b68",
        "name": "next mode",
        "links": [
            "dc4ac0d8.de1b6"
        ],
        "x": 975,
        "y": 780,
        "wires": []
    },
    {
        "id": "dc4ac0d8.de1b6",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "cycle mode",
        "links": [
            "3ef26a38.77bd66"
        ],
        "x": 55,
        "y": 360,
        "wires": [
            [
                "b4554326.84f54"
            ]
        ]
    },
    {
        "id": "b4554326.84f54",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "cycle mode",
        "func": "if( msg.payload === true ) {\n    var modes = global.get(\"controlmodes\");\n    var controller = global.get(\"controller\");\n    var current = controller.mode;\n    msg.payload = modes[current].next;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 210,
        "y": 360,
        "wires": [
            [
                "7b60dd57.786164"
            ]
        ]
    },
    {
        "id": "7b60dd57.786164",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "set mode",
        "func": "var modes = global.get(\"controlmodes\");\nvar controller = global.get(\"controller\");\n\nvar newmode = msg.payload.toLowerCase();\nvar oldmode = controller.mode;\n\nif( newmode in modes && newmode != oldmode ) {\n    controller.mode = newmode;\n    var update = {}; \n    update.type = \"controller.mode\";\n    msg.topic = update.type;\n    update.new = newmode;\n    update.old = oldmode;\n    msg.payload = update;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 380,
        "y": 320,
        "wires": [
            [
                "ef05947f.e0bf68",
                "87dcadf0.3a323",
                "ef6868d9.1db798",
                "21227757.9aced8",
                "e10d69ae.0bd8f8"
            ]
        ]
    },
    {
        "id": "6ec9da79.7a5eb4",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "set mode",
        "links": [
            "14c1420b.50704e"
        ],
        "x": 55,
        "y": 320,
        "wires": [
            [
                "7b60dd57.786164"
            ]
        ]
    },
    {
        "id": "27636c7.7e7c794",
        "type": "ping",
        "z": "df8affe2.2a80f",
        "name": "gateway",
        "host": "192.168.1.1",
        "timer": "10",
        "x": 100,
        "y": 60,
        "wires": [
            [
                "a771171a.aa6e68"
            ]
        ]
    },
    {
        "id": "e10997a.a833368",
        "type": "link out",
        "z": "df8affe2.2a80f",
        "name": "check network",
        "links": [
            "c2307d91.a0fda"
        ],
        "x": 375,
        "y": 60,
        "wires": []
    },
    {
        "id": "a771171a.aa6e68",
        "type": "function",
        "z": "df8affe2.2a80f",
        "name": "check",
        "func": "if (msg.payload !== false){\n    msg.payload = \"on\";\n} else {\n    msg.payload = \"off\";\n}\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 250,
        "y": 60,
        "wires": [
            [
                "e10997a.a833368"
            ]
        ]
    },
    {
        "id": "c2307d91.a0fda",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "check network",
        "links": [
            "e10997a.a833368"
        ],
        "x": 55,
        "y": 700,
        "wires": [
            [
                "b3123a7d.ffbf18"
            ]
        ]
    },
    {
        "id": "b3123a7d.ffbf18",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "network update",
        "func": "var controller = global.get(\"controller\");\nvar oldstatus = controller.network;\nif(oldstatus == msg.payload){\n    return;\n}\n\ncontroller.network = msg.payload;\nvar update = {}; \nupdate.type = \"controller.network\";\nmsg.topic = update.type;\nupdate.new = controller.network;\nupdate.old = oldstatus;\nmsg.payload = update;\n\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 700,
        "wires": [
            [
                "e10d69ae.0bd8f8"
            ]
        ]
    },
    {
        "id": "6f80915b.180e2",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "set temp",
        "func": "var controller = global.get(\"controller\");\n\nvar newset = msg.payload * 1; // make sure its a number\nvar thermostat = controller.thermostat;\nvar oldset = thermostat.setpoint;\n\n// stop flow if nothing changed\nif( newset == oldset ) {\n    return;\n}\n\n// only can set when in local or web mode, check for min/max too\nif(controller.mode == \"local\" || controller.mode == \"web\" ) {\n    if( newset >= thermostat.min && newset <= thermostat.max ) {\n        thermostat.setpoint = newset;\n        var update = {}; \n        update.type = \"controller.thermostat.setpoint\";\n        msg.topic = update.type;\n        update.new = newset;\n        update.old = oldset;\n        msg.payload = update;\n        return msg;\n    }\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 380,
        "y": 480,
        "wires": [
            [
                "ef6868d9.1db798",
                "2dcab2f.177cb4e",
                "ce761ea2.ca481"
            ]
        ]
    },
    {
        "id": "239ec148.1a514e",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "temp + 1",
        "func": "var controller = global.get(\"controller\");\nif( msg.payload === true && controller.mode == \"local\" ){\n    var thermostat = controller.thermostat;\n    msg.payload = thermostat.setpoint + 1;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 180,
        "y": 480,
        "wires": [
            [
                "6f80915b.180e2"
            ]
        ]
    },
    {
        "id": "344857c0.9cab58",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "temp - 1",
        "func": "var controller = global.get(\"controller\");\nif( msg.payload === true && controller.mode == \"local\" ){\n    var thermostat = controller.thermostat;\n    msg.payload = thermostat.setpoint - 1;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 180,
        "y": 520,
        "wires": [
            [
                "6f80915b.180e2"
            ]
        ]
    },
    {
        "id": "d480ed0f.5301b",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "current Temp",
        "links": [
            "2b1cf22d.438c3e"
        ],
        "x": 55,
        "y": 640,
        "wires": [
            [
                "37f2f4f4.758c6c"
            ]
        ]
    },
    {
        "id": "379aba1a.097886",
        "type": "link out",
        "z": "f79455b3.47eaa8",
        "name": "relay on",
        "links": [
            "8044974c.ba51c8"
        ],
        "x": 935,
        "y": 400,
        "wires": []
    },
    {
        "id": "37f2f4f4.758c6c",
        "type": "smooth",
        "z": "f79455b3.47eaa8",
        "name": "",
        "action": "mean",
        "count": "3",
        "round": "1",
        "mult": "single",
        "x": 180,
        "y": 640,
        "wires": [
            [
                "4718bf97.fee54"
            ]
        ]
    },
    {
        "id": "52c61823.e9f528",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "safeguard",
        "func": "// just off for now,\n// implement checking current temp for overheating\n// msg.payload = 0;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 740,
        "y": 120,
        "wires": [
            [
                "dadf94f5.62be08"
            ]
        ]
    },
    {
        "id": "8044974c.ba51c8",
        "type": "link in",
        "z": "9ba019b1.949b68",
        "name": "relay on",
        "links": [
            "379aba1a.097886"
        ],
        "x": 35,
        "y": 120,
        "wires": [
            [
                "9ef3fc33.a94ae",
                "8d151d16.622d5"
            ]
        ]
    },
    {
        "id": "8fa95478.3c7368",
        "type": "inject",
        "z": "9ba019b1.949b68",
        "name": "read temp 75",
        "topic": "",
        "payload": "75",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 770,
        "y": 660,
        "wires": [
            [
                "2b1cf22d.438c3e"
            ]
        ]
    },
    {
        "id": "fc6a2360.e97f7",
        "type": "inject",
        "z": "9ba019b1.949b68",
        "name": "read temp 77",
        "topic": "",
        "payload": "77",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 770,
        "y": 620,
        "wires": [
            [
                "2b1cf22d.438c3e"
            ]
        ]
    },
    {
        "id": "77fbf34.c0c300c",
        "type": "inject",
        "z": "9ba019b1.949b68",
        "name": "read temp 65",
        "topic": "",
        "payload": "65",
        "payloadType": "num",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 770,
        "y": 700,
        "wires": [
            [
                "2b1cf22d.438c3e"
            ]
        ]
    },
    {
        "id": "2b1cf22d.438c3e",
        "type": "link out",
        "z": "9ba019b1.949b68",
        "name": "temp reading",
        "links": [
            "d480ed0f.5301b"
        ],
        "x": 995,
        "y": 580,
        "wires": []
    },
    {
        "id": "ef05947f.e0bf68",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "On Mode",
        "func": "\nif( msg.topic == \"controller.mode\" ) {\n    var controller = global.get(\"controller\");\n    if(controller.mode == \"on\") {\n        var update = {}; \n        update.type = \"controller.relay.setpoint\";\n        update.old = controller.relay.setpoint;\n\n        update.new = 1;\n        msg.topic = update.type;\n        msg.payload = update;\n        return msg;\n    }\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 620,
        "y": 320,
        "wires": [
            [
                "345ef323.ec43ac"
            ]
        ]
    },
    {
        "id": "87dcadf0.3a323",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "Off Mode",
        "func": "if( msg.topic == \"controller.mode\" ) {\n    var controller = global.get(\"controller\");\n    if(controller.mode == \"off\") {\n        var update = {}; \n        update.type = \"controller.relay.setpoint\";\n        update.old = controller.relay.setpoint;\n\n        update.new = 0;\n        msg.topic = update.type;\n        msg.payload = update;\n        return msg;\n    }\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 620,
        "y": 360,
        "wires": [
            [
                "345ef323.ec43ac"
            ]
        ]
    },
    {
        "id": "325e37c8.747088",
        "type": "debug",
        "z": "f79455b3.47eaa8",
        "name": "",
        "active": true,
        "console": "false",
        "complete": "false",
        "x": 470,
        "y": 60,
        "wires": []
    },
    {
        "id": "16f40c39.3de624",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "remote on",
        "links": [
            "93983d46.97d2"
        ],
        "x": 55,
        "y": 220,
        "wires": [
            [
                "b5234495.f311f8"
            ]
        ]
    },
    {
        "id": "309ee964.ae4376",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "remote off",
        "links": [
            "ccb9d6ba.8d9d38"
        ],
        "x": 55,
        "y": 260,
        "wires": [
            [
                "aa5e0749.ce3ea8"
            ]
        ]
    },
    {
        "id": "b5234495.f311f8",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "Remote Mode On",
        "func": "\nvar controller = global.get(\"controller\");\nif(controller.mode == \"remote\" ) {\n    var update = {}; \n    update.type = \"controller.relay.setpoint\";\n    update.old = controller.relay.setpoint;\n    update.new = 1;\n    msg.topic = update.type;\n    msg.payload = update;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 220,
        "wires": [
            [
                "345ef323.ec43ac"
            ]
        ]
    },
    {
        "id": "aa5e0749.ce3ea8",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "Remote Mode Off",
        "func": "\nvar controller = global.get(\"controller\");\nif(controller.mode == \"remote\" ) {\n    var update = {}; \n    update.type = \"controller.relay.setpoint\";\n    update.old = controller.relay.setpoint;\n    \n    update.new = 0;\n    msg.topic = update.type;\n    msg.payload = update;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 590,
        "y": 260,
        "wires": [
            [
                "345ef323.ec43ac"
            ]
        ]
    },
    {
        "id": "ef6868d9.1db798",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "eval temp",
        "func": "\nif( msg.topic == \"controller.mode\" ||\n    msg.topic == \"controller.thermostat.setpoint\" ||\n    msg.topic == \"controller.thermostat.temp\") {\n    var controller = global.get(\"controller\");\n    // this applies to local + web mode only\n    if(controller.mode == \"local\" || controller.mode == \"web\") {\n        var thermostat = controller.thermostat;\n        // if temp too low, turn it on\n        if( thermostat.temp <= thermostat.setpoint - thermostat.deadband) {\n            var update = {}; \n            update.type = \"controller.relay.setpoint\";\n            msg.topic = update.type;\n            update.new = 1;\n            update.old = 0\n            msg.payload = update;\n            return msg;\n        }\n        //if temp to high, turn it off\n        if( thermostat.temp >= thermostat.setpoint + thermostat.deadband) {\n            var update = {}; \n            update.type = \"controller.relay.setpoint\";\n            msg.topic = update.type;\n            update.new = 0;\n            update.old = 1\n            msg.payload = update;\n            return msg;\n        }\n    }\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 620,
        "y": 400,
        "wires": [
            [
                "345ef323.ec43ac"
            ]
        ]
    },
    {
        "id": "bbfd8fb3.20033",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "get controller",
        "func": "var controller = global.get(\"controller\");\nmsg.payload = controller;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 210,
        "y": 340,
        "wires": [
            [
                "4bc59898.71ade8"
            ]
        ]
    },
    {
        "id": "17796da7.ba8fe2",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "update main display",
        "func": "var controller = global.get(\"controller\");\nvar controlmodes = global.get(\"controlmodes\");\n\nvar display = controller.display;\n\nvar temp = controller.thermostat.temp;\ndisplay.current = Math.round(temp);\nvar decimal = Math.abs(temp - display.current) * 10;\ndisplay.currentdecimal = Math.round(decimal);\n\ndisplay.set = \"\";\nif( controller.mode == \"local\" || controller.mode == \"web\" ) {\n    display.set = \"Set:   \" + controller.thermostat.setpoint;\n}\n\nif( controller.relay.setpoint === 1 ) {\n    display.heatcolor = \"red\";\n} else {\n    display.heatcolor = \"black\";\n}\n\ndisplay.thermo = \"thermo-0\";\nif( controller.thermostat.temp > 68 ) {\n    display.thermo = \"thermo-1\";\n}\nif( controller.thermostat.temp > 72 ) {\n    display.thermo = \"thermo-2\";\n}\nif( controller.thermostat.temp > 75 ) {\n    display.thermo = \"thermo-3\";\n}\nif( controller.thermostat.temp > 78 ) {\n    display.thermo = \"thermo-4\";\n}\n\ndisplay.mode = controlmodes[controller.mode].disp;\ndisplay.network = \"bolt\";\ndisplay.networkcolor = \"red\";\nif( controller.network == \"on\") {\n    display.network = \"wifi\";\n    display.networkcolor = \"green\";\n}\n\nvar update = {}; \nupdate.type = \"controller.display\";\nmsg.topic = update.type;\nupdate.new = display;\nmsg.payload = update;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 860,
        "y": 640,
        "wires": [
            [
                "eb9c043.535e0f8"
            ]
        ]
    },
    {
        "id": "eb9c043.535e0f8",
        "type": "link out",
        "z": "f79455b3.47eaa8",
        "name": "update display",
        "links": [
            "99c950f.21467b"
        ],
        "x": 1015,
        "y": 640,
        "wires": []
    },
    {
        "id": "99c950f.21467b",
        "type": "link in",
        "z": "9ba019b1.949b68",
        "name": "send display",
        "links": [
            "eb9c043.535e0f8"
        ],
        "x": 35,
        "y": 340,
        "wires": [
            [
                "bbfd8fb3.20033"
            ]
        ]
    },
    {
        "id": "8245b22c.52179",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "web set temp",
        "links": [
            "a7c2adee.37d4f"
        ],
        "x": 55,
        "y": 560,
        "wires": [
            [
                "cd1e2a6c.db8fa8"
            ]
        ]
    },
    {
        "id": "cd1e2a6c.db8fa8",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "Mode Web",
        "func": "var controller = global.get(\"controller\");\n\nif(controller.mode == \"web\" ) {\n    var value = msg.payload * 1; //make sure its a number\n    msg.payload = value;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 190,
        "y": 560,
        "wires": [
            [
                "6f80915b.180e2"
            ]
        ]
    },
    {
        "id": "adbf6c62.d7913",
        "type": "rpi-ds18b20",
        "z": "9ba019b1.949b68",
        "topic": "",
        "array": false,
        "name": "read ds18b20",
        "x": 340,
        "y": 580,
        "wires": [
            [
                "8b9f70d0.39b62"
            ]
        ]
    },
    {
        "id": "281c5365.e9a15c",
        "type": "inject",
        "z": "9ba019b1.949b68",
        "name": "",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "5",
        "crontab": "",
        "once": false,
        "x": 130,
        "y": 580,
        "wires": [
            [
                "adbf6c62.d7913"
            ]
        ]
    },
    {
        "id": "8b9f70d0.39b62",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "convert to fahrenheit",
        "func": "var celsius = msg.payload;\nvar far = (celsius * 9/5) + 32;\n//msg.payload = Math.round( far * 10 ) / 10;\nmsg.payload = Math.round( far );\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 560,
        "y": 580,
        "wires": [
            [
                "2b1cf22d.438c3e"
            ]
        ]
    },
    {
        "id": "4718bf97.fee54",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "temp update?",
        "func": "\nvar controller = global.get(\"controller\");\nvar oldtemp = controller.thermostat.temp;\nvar newtemp = msg.payload;\n\nvar diff = Math.abs( oldtemp - newtemp );\nif( diff >= 0.1 ) {\n    controller.thermostat.temp = newtemp;\n    var update = {}; \n    update.type = \"controller.thermostat.temp\";\n    msg.topic = update.type;\n    update.new = newtemp;\n    update.old = oldtemp;\n    msg.payload = update;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 640,
        "wires": [
            [
                "ef6868d9.1db798",
                "a3dc7cbe.468e5",
                "e10d69ae.0bd8f8"
            ]
        ]
    },
    {
        "id": "8c9e513.e73a8b",
        "type": "template",
        "z": "9ba019b1.949b68",
        "name": "on/off screen",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{ \"cmds\": [\n\t{ \"cmd\": \"bounds\", \"bg\": \"black\", \"fg\": \"black\" },\n\t{ \"cmd\": \"write\", \"fg\": \"white\", \"size\": \"44\", \"x\": \"1\", \"y\": \"26\", \"text\": \"{{payload}}\" }\n\t]\n}\n",
        "output": "str",
        "x": 370,
        "y": 200,
        "wires": [
            [
                "cada9d93.f02e9",
                "a1f1cfc1.0191"
            ]
        ]
    },
    {
        "id": "9ef3fc33.a94ae",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "trigger screen?",
        "func": "if( msg.topic == \"controller.relay.setpoint\" ) {\n    var controller = global.get(\"controller\");\n    var state = controller.relay.setpoint;\n    if(state == 1) {\n        msg.payload = \"On\";\n    } else {\n        msg.payload = \"Off\";\n    }\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 180,
        "y": 200,
        "wires": [
            [
                "8c9e513.e73a8b"
            ]
        ]
    },
    {
        "id": "23b4fa43.0e4d66",
        "type": "link out",
        "z": "9ba019b1.949b68",
        "name": "retrigger display",
        "links": [
            "d6b35770.ebc238"
        ],
        "x": 975,
        "y": 220,
        "wires": []
    },
    {
        "id": "d6b35770.ebc238",
        "type": "link in",
        "z": "f79455b3.47eaa8",
        "name": "retrigger main screen",
        "links": [
            "23b4fa43.0e4d66"
        ],
        "x": 715,
        "y": 600,
        "wires": [
            [
                "17796da7.ba8fe2"
            ]
        ]
    },
    {
        "id": "8d151d16.622d5",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "relay on",
        "func": "if( msg.topic == \"controller.relay.setpoint\" ) {\n    var controller = global.get(\"controller\");\n    msg.payload = controller.relay.setpoint;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 200,
        "y": 120,
        "wires": [
            [
                "61ffa680.4a9248"
            ]
        ]
    },
    {
        "id": "61ffa680.4a9248",
        "type": "stoptimer",
        "z": "9ba019b1.949b68",
        "duration": "5",
        "units": "Second",
        "payloadtype": "num",
        "payloadval": "0",
        "name": "delay ON/OFF",
        "x": 440,
        "y": 120,
        "wires": [
            [
                "52c61823.e9f528"
            ],
            []
        ]
    },
    {
        "id": "93a4d67.3329128",
        "type": "inject",
        "z": "f79455b3.47eaa8",
        "name": "Mode",
        "topic": "",
        "payload": "true",
        "payloadType": "bool",
        "repeat": "",
        "crontab": "",
        "once": false,
        "x": 90,
        "y": 420,
        "wires": [
            [
                "b4554326.84f54"
            ]
        ]
    },
    {
        "id": "8d64c141.04721",
        "type": "link in",
        "z": "9ba019b1.949b68",
        "name": "display set temp change",
        "links": [
            "2dcab2f.177cb4e"
        ],
        "x": 35,
        "y": 260,
        "wires": [
            [
                "60174be9.254c54"
            ]
        ]
    },
    {
        "id": "54ad7276.a7d65c",
        "type": "template",
        "z": "9ba019b1.949b68",
        "name": "set temp up screen",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{ \"cmds\": [\n\t{ \"cmd\": \"bounds\", \"bg\": \"black\", \"fg\": \"black\" },\n\t{ \"cmd\": \"symbol\", \"fg\": \"white\", \"size\": \"48\", \"x\": \"12\", \"y\": \"0\", \"text\": \"{{payload.up}}\" },\n\t{ \"cmd\": \"write\", \"fg\": \"white\", \"size\": \"48\", \"x\": \"12\", \"y\": \"40\", \"text\": \"{{payload.value}}\" }\n\t]\n}\n",
        "output": "str",
        "x": 350,
        "y": 240,
        "wires": [
            [
                "cada9d93.f02e9",
                "a1f1cfc1.0191"
            ]
        ]
    },
    {
        "id": "60174be9.254c54",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "trigger screen?",
        "func": "if( msg.topic == \"controller.thermostat.setpoint\" ) {\n    var controller = global.get(\"controller\");\n    var newval = msg.payload.new;\n    var oldval = msg.payload.old;\n    \n    var update = {};    \n    update.value = newval;\n    update.up = \"\";\n    update.down = \"\";\n    \n    if(newval > oldval){\n        update.up = \"caret-up\"\n        msg.payload = update;\n        return [msg, null];\n    }\n    \n    if(newval < oldval){\n        update.down = \"caret-down\"\n        msg.payload = update;\n        return [null, msg];\n    }\n}",
        "outputs": "2",
        "noerr": 0,
        "x": 160,
        "y": 260,
        "wires": [
            [
                "54ad7276.a7d65c"
            ],
            [
                "e490cd46.71035"
            ]
        ]
    },
    {
        "id": "e490cd46.71035",
        "type": "template",
        "z": "9ba019b1.949b68",
        "name": "set temp down screen",
        "field": "payload",
        "fieldType": "msg",
        "format": "handlebars",
        "syntax": "mustache",
        "template": "{ \"cmds\": [\n\t{ \"cmd\": \"bounds\", \"bg\": \"black\", \"fg\": \"black\" },\n\t{ \"cmd\": \"write\", \"fg\": \"white\", \"size\": \"48\", \"x\": \"13\", \"y\": \"0\", \"text\": \"{{payload.value}}\" },\n\t{ \"cmd\": \"symbol\", \"fg\": \"white\", \"size\": \"48\", \"x\": \"16\", \"y\": \"49\", \"text\": \"{{payload.down}}\" }\n\t]\n}\n",
        "output": "str",
        "x": 360,
        "y": 280,
        "wires": [
            [
                "cada9d93.f02e9",
                "a1f1cfc1.0191"
            ]
        ]
    },
    {
        "id": "2dcab2f.177cb4e",
        "type": "link out",
        "z": "f79455b3.47eaa8",
        "name": "temp up/down",
        "links": [
            "8d64c141.04721"
        ],
        "x": 935,
        "y": 480,
        "wires": []
    },
    {
        "id": "9c0662fc.68d28",
        "type": "stoptimer",
        "z": "9ba019b1.949b68",
        "duration": "4",
        "units": "Second",
        "payloadtype": "bool",
        "payloadval": "true",
        "name": "delay",
        "x": 750,
        "y": 220,
        "wires": [
            [
                "252399e0.6ae2b6"
            ],
            []
        ]
    },
    {
        "id": "252399e0.6ae2b6",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "unblock",
        "func": "var controller = global.get(\"controller\");\ncontroller.display.update = true;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 880,
        "y": 220,
        "wires": [
            [
                "23b4fa43.0e4d66"
            ]
        ]
    },
    {
        "id": "a1f1cfc1.0191",
        "type": "function",
        "z": "9ba019b1.949b68",
        "name": "block main",
        "func": "var controller = global.get(\"controller\");\ncontroller.display.update = false;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 610,
        "y": 220,
        "wires": [
            [
                "9c0662fc.68d28"
            ]
        ]
    },
    {
        "id": "acb006dd.e0c0c8",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "relay on?",
        "func": "var controller = global.get(\"controller\");\nvar curset = controller.relay.setpoint;\nvar newset = msg.payload.new;\n\nif(curset != newset ) {\n    controller.relay.setpoint = newset;\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 820,
        "y": 400,
        "wires": [
            [
                "379aba1a.097886",
                "f2d0d87d.a9c318"
            ]
        ]
    },
    {
        "id": "345ef323.ec43ac",
        "type": "stoptimer",
        "z": "f79455b3.47eaa8",
        "duration": "2",
        "units": "Second",
        "payloadtype": "num",
        "payloadval": "0",
        "name": "settle relay state",
        "x": 840,
        "y": 280,
        "wires": [
            [
                "acb006dd.e0c0c8"
            ],
            []
        ]
    },
    {
        "id": "694c0f48.b5eab",
        "type": "mqtt in",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/in/web/mode",
        "qos": "2",
        "broker": "a678595b.f9cba8",
        "x": 140,
        "y": 200,
        "wires": [
            [
                "e6a21448.cab418"
            ]
        ]
    },
    {
        "id": "14c1420b.50704e",
        "type": "link out",
        "z": "df8affe2.2a80f",
        "name": "",
        "links": [
            "6ec9da79.7a5eb4"
        ],
        "x": 735,
        "y": 140,
        "wires": []
    },
    {
        "id": "a3de242.84741d8",
        "type": "function",
        "z": "df8affe2.2a80f",
        "name": "check input",
        "func": "\nvar mode = msg.payload.toLowerCase();\nif( mode == \"heat\" || mode == \"auto\") {\n    msg.payload = \"web\";\n    return msg;\n}\n\nif( mode == \"off\") {\n    msg.payload = \"off\";\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 200,
        "wires": [
            [
                "14c1420b.50704e"
            ]
        ]
    },
    {
        "id": "e0ff1bcd.9503f8",
        "type": "mqtt in",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/in/mode",
        "qos": "2",
        "broker": "a678595b.f9cba8",
        "x": 130,
        "y": 140,
        "wires": [
            [
                "b99cf6e3.43bc58"
            ]
        ]
    },
    {
        "id": "b1a6af98.3218a",
        "type": "function",
        "z": "df8affe2.2a80f",
        "name": "check input",
        "func": "var mode = msg.payload.toLowerCase();\nmsg.payload = mode;\nreturn msg;\n",
        "outputs": 1,
        "noerr": 0,
        "x": 570,
        "y": 140,
        "wires": [
            [
                "14c1420b.50704e"
            ]
        ]
    },
    {
        "id": "7c741e9a.1c79f",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/mode",
        "qos": "2",
        "retain": "true",
        "broker": "a678595b.f9cba8",
        "x": 790,
        "y": 420,
        "wires": []
    },
    {
        "id": "21227757.9aced8",
        "type": "link out",
        "z": "f79455b3.47eaa8",
        "name": "mode changed",
        "links": [
            "c1cf9dec.5ebf7"
        ],
        "x": 595,
        "y": 520,
        "wires": []
    },
    {
        "id": "c1cf9dec.5ebf7",
        "type": "link in",
        "z": "df8affe2.2a80f",
        "name": "mode changed",
        "links": [
            "21227757.9aced8"
        ],
        "x": 135,
        "y": 480,
        "wires": [
            [
                "d71d6718.0d93f8"
            ]
        ]
    },
    {
        "id": "b83be319.ad9fe",
        "type": "function",
        "z": "426cacd1.2cdb44",
        "name": "convert output",
        "func": "var val = msg.payload.new;\nmsg.payload = val;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 360,
        "y": 260,
        "wires": [
            []
        ]
    },
    {
        "id": "c6382745.08ac58",
        "type": "subflow:426cacd1.2cdb44",
        "z": "df8affe2.2a80f",
        "name": "",
        "x": 560,
        "y": 480,
        "wires": [
            [
                "7c741e9a.1c79f",
                "190c291e.b44ca7"
            ]
        ]
    },
    {
        "id": "ce761ea2.ca481",
        "type": "link out",
        "z": "f79455b3.47eaa8",
        "name": "setpoint changed",
        "links": [
            "d12e0ec5.d3074"
        ],
        "x": 595,
        "y": 560,
        "wires": []
    },
    {
        "id": "a3dc7cbe.468e5",
        "type": "link out",
        "z": "f79455b3.47eaa8",
        "name": "temp changed",
        "links": [
            "49ebb5b7.9b438c"
        ],
        "x": 595,
        "y": 600,
        "wires": []
    },
    {
        "id": "f151ca72.bc9258",
        "type": "subflow:426cacd1.2cdb44",
        "z": "df8affe2.2a80f",
        "name": "",
        "x": 560,
        "y": 600,
        "wires": [
            [
                "286da299.58873e",
                "d5448cce.9065b"
            ]
        ]
    },
    {
        "id": "528ee230.605fbc",
        "type": "subflow:426cacd1.2cdb44",
        "z": "df8affe2.2a80f",
        "name": "",
        "x": 560,
        "y": 720,
        "wires": [
            [
                "61c0efc2.90d66",
                "fa4208ac.033e88"
            ]
        ]
    },
    {
        "id": "d12e0ec5.d3074",
        "type": "link in",
        "z": "df8affe2.2a80f",
        "name": "setpoint changed",
        "links": [
            "ce761ea2.ca481"
        ],
        "x": 135,
        "y": 600,
        "wires": [
            [
                "2ba03595.b8591a"
            ]
        ]
    },
    {
        "id": "49ebb5b7.9b438c",
        "type": "link in",
        "z": "df8affe2.2a80f",
        "name": "temp changed",
        "links": [
            "a3dc7cbe.468e5"
        ],
        "x": 135,
        "y": 720,
        "wires": [
            [
                "528ee230.605fbc"
            ]
        ]
    },
    {
        "id": "286da299.58873e",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/setpoint",
        "qos": "2",
        "retain": "true",
        "broker": "a678595b.f9cba8",
        "x": 800,
        "y": 540,
        "wires": []
    },
    {
        "id": "61c0efc2.90d66",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/temperature",
        "qos": "",
        "retain": "",
        "broker": "a678595b.f9cba8",
        "x": 810,
        "y": 660,
        "wires": []
    },
    {
        "id": "2ba03595.b8591a",
        "type": "stoptimer",
        "z": "df8affe2.2a80f",
        "duration": "2",
        "units": "Second",
        "payloadtype": "num",
        "payloadval": "0",
        "name": "",
        "x": 320,
        "y": 600,
        "wires": [
            [
                "f151ca72.bc9258"
            ],
            []
        ]
    },
    {
        "id": "d71d6718.0d93f8",
        "type": "stoptimer",
        "z": "df8affe2.2a80f",
        "duration": "2",
        "units": "Second",
        "payloadtype": "num",
        "payloadval": "0",
        "name": "",
        "x": 340,
        "y": 480,
        "wires": [
            [
                "c6382745.08ac58"
            ],
            []
        ]
    },
    {
        "id": "9f5d5232.be102",
        "type": "link in",
        "z": "df8affe2.2a80f",
        "name": "relay changed",
        "links": [
            "4fddad2.b851c54",
            "f2d0d87d.a9c318"
        ],
        "x": 135,
        "y": 840,
        "wires": [
            [
                "e32fbea9.d18c8"
            ]
        ]
    },
    {
        "id": "e32fbea9.d18c8",
        "type": "function",
        "z": "df8affe2.2a80f",
        "name": "convert",
        "func": "var update = \"\"\nif( msg.payload.new == 1) {\n    update = \"on\";\n}\nif( msg.payload.new === 0) {\n    update = \"off\";\n}\nmsg.payload = update;\nreturn msg;",
        "outputs": 1,
        "noerr": 0,
        "x": 560,
        "y": 840,
        "wires": [
            [
                "1dee71f7.f4713e",
                "79688ebb.4b88b"
            ]
        ]
    },
    {
        "id": "1dee71f7.f4713e",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/flame",
        "qos": "2",
        "retain": "true",
        "broker": "a678595b.f9cba8",
        "x": 790,
        "y": 780,
        "wires": []
    },
    {
        "id": "f2d0d87d.a9c318",
        "type": "link out",
        "z": "f79455b3.47eaa8",
        "name": "relay changed",
        "links": [
            "9f5d5232.be102"
        ],
        "x": 935,
        "y": 360,
        "wires": []
    },
    {
        "id": "4002723.64ad08c",
        "type": "mqtt in",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/in/web/set",
        "qos": "2",
        "broker": "a678595b.f9cba8",
        "x": 130,
        "y": 260,
        "wires": [
            [
                "e43b443e.364a28"
            ]
        ]
    },
    {
        "id": "b99cf6e3.43bc58",
        "type": "delay",
        "z": "df8affe2.2a80f",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 380,
        "y": 140,
        "wires": [
            [
                "b1a6af98.3218a"
            ]
        ]
    },
    {
        "id": "e6a21448.cab418",
        "type": "delay",
        "z": "df8affe2.2a80f",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 380,
        "y": 200,
        "wires": [
            [
                "a3de242.84741d8"
            ]
        ]
    },
    {
        "id": "e43b443e.364a28",
        "type": "delay",
        "z": "df8affe2.2a80f",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 380,
        "y": 260,
        "wires": [
            [
                "a7c2adee.37d4f"
            ]
        ]
    },
    {
        "id": "a7c2adee.37d4f",
        "type": "link out",
        "z": "df8affe2.2a80f",
        "name": "web set temp",
        "links": [
            "8245b22c.52179"
        ],
        "x": 735,
        "y": 260,
        "wires": []
    },
    {
        "id": "d5448cce.9065b",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/web/set",
        "qos": "2",
        "retain": "true",
        "broker": "a678595b.f9cba8",
        "x": 800,
        "y": 600,
        "wires": []
    },
    {
        "id": "d4904c21.27f43",
        "type": "mqtt in",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/in/remote",
        "qos": "2",
        "broker": "a678595b.f9cba8",
        "x": 130,
        "y": 320,
        "wires": [
            [
                "2dc21370.863a9c"
            ]
        ]
    },
    {
        "id": "2dc21370.863a9c",
        "type": "delay",
        "z": "df8affe2.2a80f",
        "name": "",
        "pauseType": "rate",
        "timeout": "5",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "2",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": true,
        "x": 380,
        "y": 320,
        "wires": [
            [
                "d405f971.1735d8"
            ]
        ]
    },
    {
        "id": "93983d46.97d2",
        "type": "link out",
        "z": "df8affe2.2a80f",
        "name": "remote on",
        "links": [
            "16f40c39.3de624"
        ],
        "x": 735,
        "y": 300,
        "wires": []
    },
    {
        "id": "ccb9d6ba.8d9d38",
        "type": "link out",
        "z": "df8affe2.2a80f",
        "name": "remote off",
        "links": [
            "309ee964.ae4376"
        ],
        "x": 735,
        "y": 340,
        "wires": []
    },
    {
        "id": "d405f971.1735d8",
        "type": "function",
        "z": "df8affe2.2a80f",
        "name": "on/off?",
        "func": "var state = msg.payload.toLowerCase();\nif( state == \"on\") {\n    return [msg, null];\n}\n\nif( state == \"off\") {\n    return [null, msg];\n}\n",
        "outputs": "2",
        "noerr": 0,
        "x": 560,
        "y": 320,
        "wires": [
            [
                "93983d46.97d2"
            ],
            [
                "ccb9d6ba.8d9d38"
            ]
        ]
    },
    {
        "id": "fa4208ac.033e88",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/web/temp",
        "qos": "2",
        "retain": "true",
        "broker": "a678595b.f9cba8",
        "x": 810,
        "y": 720,
        "wires": []
    },
    {
        "id": "79688ebb.4b88b",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/web/state",
        "qos": "2",
        "retain": "true",
        "broker": "a678595b.f9cba8",
        "x": 810,
        "y": 840,
        "wires": []
    },
    {
        "id": "190c291e.b44ca7",
        "type": "mqtt out",
        "z": "df8affe2.2a80f",
        "name": "",
        "topic": "/fireplace/out/web/mode",
        "qos": "2",
        "retain": "true",
        "broker": "a678595b.f9cba8",
        "x": 810,
        "y": 480,
        "wires": []
    },
    {
        "id": "8dd91503.c57738",
        "type": "exec",
        "z": "f79455b3.47eaa8",
        "command": "/home/pi/projects/oledserver/server/OLED-ssd1331.py",
        "addpay": false,
        "append": "",
        "useSpawn": "true",
        "timer": "",
        "oldrc": false,
        "name": "OLED server",
        "x": 470,
        "y": 940,
        "wires": [
            [
                "9f9f3c4d.c4ff2"
            ],
            [
                "9f9f3c4d.c4ff2"
            ],
            [
                "9f9f3c4d.c4ff2",
                "88fe17.c8cfc1e8"
            ]
        ]
    },
    {
        "id": "9f9f3c4d.c4ff2",
        "type": "debug",
        "z": "f79455b3.47eaa8",
        "name": "console",
        "active": true,
        "console": "false",
        "complete": "payload",
        "x": 740,
        "y": 900,
        "wires": []
    },
    {
        "id": "3f9cacdd.b37684",
        "type": "exec",
        "z": "f79455b3.47eaa8",
        "command": "pkill OLED-ssd1331",
        "addpay": false,
        "append": "",
        "useSpawn": "false",
        "timer": "",
        "oldrc": false,
        "name": "kill existing server",
        "x": 450,
        "y": 860,
        "wires": [
            [
                "9f9f3c4d.c4ff2"
            ],
            [
                "9f9f3c4d.c4ff2"
            ],
            []
        ]
    },
    {
        "id": "c1d99d8.3bddc6",
        "type": "delay",
        "z": "f79455b3.47eaa8",
        "name": "",
        "pauseType": "delay",
        "timeout": "1",
        "timeoutUnits": "seconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 620,
        "y": 760,
        "wires": [
            [
                "17796da7.ba8fe2"
            ]
        ]
    },
    {
        "id": "88fe17.c8cfc1e8",
        "type": "stoptimer",
        "z": "f79455b3.47eaa8",
        "duration": "500",
        "units": "Millisecond",
        "payloadtype": "num",
        "payloadval": "0",
        "name": "",
        "x": 500,
        "y": 1060,
        "wires": [
            [
                "8dd91503.c57738"
            ],
            []
        ]
    },
    {
        "id": "2da23b60.9d3254",
        "type": "delay",
        "z": "f79455b3.47eaa8",
        "name": "",
        "pauseType": "delay",
        "timeout": "500",
        "timeoutUnits": "milliseconds",
        "rate": "1",
        "nbRateUnits": "1",
        "rateUnits": "second",
        "randomFirst": "1",
        "randomLast": "5",
        "randomUnits": "seconds",
        "drop": false,
        "x": 170,
        "y": 940,
        "wires": [
            [
                "8dd91503.c57738"
            ]
        ]
    },
    {
        "id": "9389e09d.01c1b",
        "type": "inject",
        "z": "f79455b3.47eaa8",
        "name": "start server (only run on start)",
        "topic": "",
        "payload": "",
        "payloadType": "date",
        "repeat": "",
        "crontab": "",
        "once": true,
        "x": 170,
        "y": 1060,
        "wires": [
            [
                "2da23b60.9d3254"
            ]
        ]
    },
    {
        "id": "e10d69ae.0bd8f8",
        "type": "function",
        "z": "f79455b3.47eaa8",
        "name": "block update?",
        "func": "var controller = global.get(\"controller\");\n\nif( controller.display.update ){\n    return msg;\n}\n",
        "outputs": 1,
        "noerr": 0,
        "x": 620,
        "y": 640,
        "wires": [
            [
                "17796da7.ba8fe2"
            ]
        ]
    }
]