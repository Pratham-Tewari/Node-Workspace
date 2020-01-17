// importing event module
var events = require('events');
// create an object of eventEmitter
var eventEmitter=new events.EventEmitter();
// making event handler
var connectionHandler = function connected()
{
    console.log("EVENT-HANDLER IS MADE SUCCESSFULLY!!")
}
// Bind the event and eventhandlet
eventEmitter.on('connection',connectionHandler);
//fire an event
eventEmitter.emit('connection');
console.log("Program Ended!!!");
