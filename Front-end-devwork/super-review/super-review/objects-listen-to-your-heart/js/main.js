//Create a stopwatch object that has four properties and three methods
let stopwatch = {}

stopwatch.currentTime = 12

stopwatch.tellTime = function(time){
    console.log(`The current time is ${time}.`)
}

stopwatch.tellTime(stopwatch.currentTime)

