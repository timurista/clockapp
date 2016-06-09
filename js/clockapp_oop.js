var clock = null

var init = function(buttons) {
	var $display = document.getElementById('display')
	var $buttons = document.getElementById('buttons')
	
	// creates the elements from the array passed in
	var argmap = {
		'display': $display,
		'date': new Date(1976, 1, 0, 0, 0, 0, 0),
		'interval': 1000,
		'addSecs': 1,
	}
	
	// setting global clock for debugging
	clock = new Clock(argmap)

	// 3 - 6. Supports: start, pause, resume, and a reset button
	buttons.forEach(function(button) {
		name = button.name
		click = button.click
		var btn = document.createElement("button")
		var textNode = document.createTextNode(name)
		btn.setAttribute("id", name)
		btn.appendChild(textNode)

		// bind context for prototype method to current clock object
		btn.addEventListener("click", click.bind(clock))

		// special binding for start function
		if (name === 'Start') btn.addEventListener("click", 
			() => alert('The clock has started'))

		$buttons.appendChild(btn)
	})

	clock.start()
	
}


// init takes buttons params as an array of objects
// objects have name and click function
// allows you to easily update in the future
// click must take reference to prototype methods of Clock object
init([
	{ 'name': 'Start', 'click': Clock.prototype.start },
	{ 'name': 'Pause', 'click': Clock.prototype.pause },
	{ 'name': 'Resume', 'click': Clock.prototype.resume },
	{ 'name': 'Reset', 'click': Clock.prototype.reset },
	])

