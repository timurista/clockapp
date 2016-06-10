var errCount = 0

function testgroup(test) {
	console.group()
	test()
	console.groupEnd()
}

function assert(condition, message) {
    if (!condition) {
        message = message || "Assertion failed";
        console.error(message)
        errCount ++
    }
    console.log(".")
}

testgroup( () => {
	console.log("Test clock object creation")

	// test clock is an object
	// with no params
	var tClock = new Clock()
	assert(tClock, "no clock")

	// with some params
	var tClock = new Clock({ 
		'date': new Date(2001, 1, 1, 0, 0, 0, 0),
	})

	var re = /\d\d:\d\d:\d\d/

	// sanity check matching regex not always work
	assert( !"aa:cc:dd".match(re), 
		"regex match not working" )

	assert( tClock.getFormattedTime().match(re), 
		"clock not formatted as 00:00:00" )

});

// test current clock object
testgroup( () => {

	console.log("Test clock buttons work")
	console.log(clock)

	$display = document.getElementById('display')
	$resume = document.getElementById('Resume')
	$pause = document.getElementById('Pause')
	$reset = document.getElementById('Reset')
	$start = document.getElementById('Start')


	$reset.click()
	assert(clock.timer === null, 
		"resetting, resets the timer")

	assert(clock.date.getSeconds() === 1, 
		"resetting, resets the timer to 1 second")

	$start.click()
	assert(clock.timer, "starting, starts the timer")

	$pause.click()
	assert(clock.timer === null, "pausing timer, null timer")

	$resume.click()
	assert(clock.timer, "presume, timer is reset")

	clock.addSecs = 5
	var currentTime = clock.date.getSeconds()
	clock.start()

	setTimeout(() => {
		// check changing addsecs works like expected
		assert(
			clock.date.getSeconds() - currentTime === 5, 
			"adding 5 seconds doesn't work"
			)
		clock.date.setSeconds(0)
	}, 1000)

	clock.addSecs = 1

});

// test current clock object
testgroup( () => {

	console.log("Test Experimental Countdown feature")
	console.log("TODO: fix so negative goes to 00:00:00, not 23:59:59")

	eClock = new Clock()
	eClock.start()
	eClock.date.setSeconds(10)
	startTime = 10
	eClock.date.setSeconds(-2)
	assert(eClock.date.getSeconds() === 0, 'negative seconds should be 0')

	console.log('eClock start time', eClock.getFormattedTime())



	eClock.addSecs = -1
	setTimeout(() => {
		// TODO: manage callbacks with promises	
		assert(
			eClock.date.getSeconds() > startTime, 
			"after countdown, seconds did not decrease"
			)
		console.log('eClock endtime', eClock.getFormattedTime())
		eClock = null
	}, 2000)


});

var success = () => { 
	if (errCount<1) console.log("SUCCESS: all tests pass!")
	else console.info(`FAILS: ${errCount}`)
	alert("tests are finished, check console for results")
} 
setTimeout( success, 3000)


