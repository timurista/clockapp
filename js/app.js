// initialization controller
var debugging = true
var clock = null

var startAlert = function() {
	if (debugging) alert('The clock has started')
}


// creates the elements from the array passed in

var init = function(buttons) {


	// configure clock

	var $display = document.getElementById('display')
	var $buttons = document.getElementById('buttons')
	
	var argmap = {
		'display': $display,
		'date': new Date(1976, 1, 0, 0, 0, 0, 0),
		'interval': 1000,
		'addSecs': 1,
	}

	clock = new Clock(argmap) // setting global clock for debugging


	// configure buttons

	// 3 - 6. Supports: start, pause, resume, and a reset button

	buttons.forEach( function(button) {

		var btn = document.createElement("button")
		btn.textContent = button.name		
		btn.setAttribute("id", button.name)

		button.click.forEach( function(click) {
			// bind context for prototype method 
			// to current clock object
			btn.addEventListener("click", 
				click.bind(clock))			
		})

		$buttons.appendChild(btn)
	})
	
	clock.start()
}


// init takes buttons params as an array of objects
// objects have name and click function
// allows you to easily update in the future
// click must take reference to prototype methods of Clock object
init([
	{ 
		'name': 'Start', 
		'click': [Clock.prototype.start, startAlert] 
	},
	{ 
		'name': 'Pause', 
		'click': [Clock.prototype.pause] 
	},
	{ 
		'name': 'Resume', 
		'click': [Clock.prototype.resume] 
	},
	{ 
		'name': 'Reset', 
		'click': [Clock.prototype.reset] 
	},
])

