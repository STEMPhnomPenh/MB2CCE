Javascript

Javascript automatically loads everything you require at the start of the session.

We always refer to the mirobot as mirobot

Basics

// Movement

mirobot.forward(100); 			// Move forward by 100 mm

mirobot.back(100);

mirobot.left(45);				// Turn left by 45 degrees

mirobot.right(90);

// Pen Control

mirobot.penup(); 				// Move the pen up

mirobot.pendown(); 				

// Other functions

mirobot.beep();					// Makes a sound

mirobot.version();				// Reports version number

mirobot.ping();					// Pings the mirobot for a response

mirobot.ready();				// returns true when the mirobot is ready for more instructions, otherwise false.

Language

You can use any normal javascript statements such as do while, for in, if else, try catch, function, return, switch, throw, and others.

You can also use all the normal included objects, such as MATH, Date and Array.

Example functions

function draw_polygon(sides, length) {						// Draws a polygon with a variable number of sides and length

    var i;
    for (i = 0; i < sides; i++) {
        var angle = 360/sides;
        mirobot.left(angle);
        mirobot.forward(length);
    }
    mirobot.beep();											// Beep when finished
}

mirobot.pendown();
draw_polygon(5, 100);
mirobot.penup();

function square_spiral(loops, length) { 					// Draws an expanding square spiral of loops and length

	var i;
	for (i = 1; i <= loops; i++) {
        mirobot.forward(i*length); 
        mirobot.right(90);
        mirobot.forward(i*length);
        mirobot.right(90);
}

mirobot.pendown();
square_spiral(12, 10);
mirobot.penup();

function a() { 												// A function to make an A

    mirobot.pendown();
    mirobot.forward(50);
    mirobot.right(90);
    mirobot.forward(30);
    mirobot.right(90);
    mirobot.forward(50);
    mirobot.right(180);
    mirobot.forward(25);
    mirobot.left(90);
    mirobot.forward(30);
    mirobot.penup();
    mirobot.right(180);
    mirobot.forward(30);
    mirobot.right(90);
    mirobot.forward(25);
    mirobot.left(90);
    mirobot.forward(20);
    mirobot.left(90);

}

mirobot.pendown();
a();
mirobot.penup();

function circular_spiral(angle, length, sections) {			// Draws a circular spiral (roughly)

    var i;
    for (i=1; i <=sections; i++){
        mirobot.forward(length * i);
        mirobot.right(angle);
    }
}

mirobot.pendown();
circular_spiral(30, 3, 60);
mirobot.penup();

