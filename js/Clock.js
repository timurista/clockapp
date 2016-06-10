function Clock(argmap={}) {	
	this.date = argmap['date'] || new Date(
		1976, 1, 0, 0, 0, 0, 0)
	this.resetDateString = this.date.toString()
	this.timer = null
	this.interval = argmap['interval'] || 1000
	this.addSecs = argmap['addSecs'] || 1
	this.$display = argmap['display']
}


// 1. Displays time in HH:MM:SS format
Clock.prototype.getFormattedTime = function() {
	var hrs = this.date.getHours()
	var mins = this.date.getMinutes()
	var secs = this.date.getSeconds()

	mins = mins < 10 ? "0" + mins : mins
	secs = secs < 10 ? "0" + secs : secs
	hrs = hrs < 10 ? "0" + hrs : hrs

	return hrs + ":" + mins + ":" + secs
}


// updates display of the time on the clock
Clock.prototype.update = function() {
	// TODO: consider decoupling display from update function
	if (typeof this.$display != 'undefined') 
		this.$display.innerHTML = this.getFormattedTime()
	this.date.setSeconds(this.date.getSeconds() + this.addSecs)
};


// resumes the timer
Clock.prototype.resume = function() {
	// must bind clock function to context 
	// of instantiated object
	if (!this.timer) this.timer = setInterval(
		this.update.bind(this), this.interval
		) 
}


// pauses the timer
Clock.prototype.pause = function() { 
	clearInterval(this.timer) 
	this.timer = null
}


// 2. Begins at 00:00:00 upon loading
// nulls timer to avoid multiple timer creations
Clock.prototype.reset = function() {
	this.date = new Date(this.resetDateString)
	this.update()
	clearInterval(this.timer)
	this.timer = null
}


// resets and restarts timer
Clock.prototype.start = function() { this.reset(); this.resume() }
