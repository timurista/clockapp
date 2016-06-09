# Clock App


# Summary of Solution

I created an object called Clock to store an interval reference to a timingEvent for managing the basic clock features. Inside the clock, I included a reference to $display, which is a div with an innerHTML property that is set to the current time on update. I also do the updating of the time, the reseting of the clock, and other methods inside the Clock object.

I also created an app.js file to create the button elements to use with the clock. I pass in a reference to the prototype methods associated with each button and link them via an event listener on creation of each object. This makes it easier to initialize new components or buttons in the clock. To deal with conflicting context switching, the methods needed to bind to "this" inside the Clock protoype methods. 

## Pervious experience with this exercise
I have designed a pure js timer before for an online grammar quiz. The timer was designed not as an Object though, so that presented new challenges. I have worked with objects when I created a frogger game in html5 canvas and needed to instantiate multiple player and enemy objects. From this experience, I used my knowledge of javascript's prototpying features to create methods that would work in different contexts. I had to research how binding and context switching works and then implemented this knowledge to build a working clock object .

# Description

A simple timer or clock which does the following:

* Displays time in HH:MM:SS format
* Begins at 00:00:00 upon loading
* Supports a start button, which begins the clock
* Supports a pause button, which pauses the clock
* Supports a resume button, which resumes a paused clock
* Supports a reset button, which resets back to 00:00:00 time


# Key Features

Stores clock as an object and takes a display interface to update.
Display is a simple div with innerHTML property.

Initialization is done via the app.js file, where clock buttons and display interface is created and stored in the DOM.

The html file has simple styling script which for more complicated project can be removed.

The use of ECMA6 in terms of arrow functions and string templating is restricted to the testing features of the application.

## Design choices and limitations
### object design for clock
object design allows for modularity, but still preserves a link to the display div in the update method.

### initialization in the app.js file
buttons are populated inside the div at runtime, they are not hardcoded in the html file. The mechanism for adding them allows for adding multiple buttons more easily.

### global reference to clock
clock is stored in the window as a global object. The implicit availability across the application via enclosures, makes this clock easy to test. The limitations are potential conflicts with other clock objects in the future. Possible overriding the reference.

### tests in console
To avoid external libraries, I wrote a custom test file which uses console to log output of tests.

### styling: no semicolons
Most of the time automatic semicolon insertion in javascript works very well. Here is one case where it could break

```
// careful: will break
a = b + c
(d + e).print()
This is actually evaluated as:

a = b + c(d + e).print();
```

### es6 use of string templating and arrow functions
When possible, I used arrow functions for tests.js file and experimented with string templating, a new javascript feature. Browser compatability is still not great, so it is experimental and will not cause major problems in running the main application.


Otherwise, it saves space and makes the code more readible.
Read the discussion here: http://mislav.net/2010/05/semicolons/

### stlying: style simple css inside html file
Basic styling to keep app small. CSS in the future would be moved to an actual file style.css.

# Instructions

1. Open clockapp.html in browser (chrome works best)
2. click the buttons to interact with the timer
3. tests are run automatically when the page is loaded
4. to turn off the tests, remove the script reference in the clockapp.html file: ```<script src="tests/tests.js></script>```


# Tests

1. tests run to test the clock object
2. tests run to check the click of buttons on the screen
3. tests run for experimental features

Tests are stored via developer's console. To see the output from the tests, run the inspector.
1 test is failing which is experimental, the rest pass otherwise.


