# Assignment1
# functions: the functions of this program intent to control the Arduino Board with a led light and a motion sensor, the client side using a HTML Controler to control the led light and motion sensor on/off by press the button on right side of the controler, the controler also has a display funtion to inform user the number of motion/short motion/long motion that sensor detected, long motion defines a motion more than 5000ms, a short motion defines a motion less than 5000ms.
# structure: this application has following structure, the user layer which is the HTML file user can direct open it from browser while the server running, it use the server file app.js to create the server layer in order to communicate with the user and get data from sensor, the Aeduion is a data layer which is the data source for this application.
# used packages:  1. node.js
#                 2. express
#                 3. johnny-five
# How to connect: 1. The LED light connect to pin 13.
#                 2. The motion sensor connect to the pin 7, get power from Pin 5v.
