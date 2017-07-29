Python is more powerful than javascript with the Mirbot, because we have access to more commands, can use multiple Mirobots simultaneously, and even access them from the command line without using the web app at all.

We always need to import the Mirobot module in Python before using it! 
We always need to create the Mirobot object in Python before using it!

Basics

# Setup in the web app

from mirobot import Mirobot 	# Import the module

m = Mirobot()					# Create the object to use

# Movement

m.forward(100)			# Move forward by 100 mm

m.back(100)

m.left(45)				# Turn left by 45 degrees

m.right(90)

# Pen Control

m.penup()					# Move the pen up

m.pendown()

# Sensors

colliding = m.collideState()		# may be left, right, both or none

# Other functions

m.beep(500)				# Beep for 500 mS (1/2 a second)

m.ping()					# Pings the mirobot for a response

Language

You can use any normal Python statements such as while, try, for, in, if else, return, and others.

Example functions

def draw_polygon(sides, length):	# Draws a polygon with a variable number of sides and length

    angle = 360/sides
    for i in range(sides):
        m.forward(length)
        m.right(angle)
        
m.pendown()
draw_polygon(6, 50)
m.penup()

Command line usage

You can also control the mirobot from the command line. Make sure you have Python 2.7 or higher installed on your system, and have installed the mirobot package:

easy_install mirobot 

Example usage

from mirobot import Mirobot

m = Mirobot()

m.autoConnect("Mirobot-ed4f") 		# Use the real name of the mirobot

m.beep()

m.forward(100)

m.disconnect()

m.autoConnect("Mirobot-056d") 		# Use a different real name of a mirobot

m.beep()

m.forward(100)

m.disconnect()

print "All done!"