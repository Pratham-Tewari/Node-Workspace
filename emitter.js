var events=require('events');
var event=new events.EventEmitter();

event.addListener('FirstEvent', function(data)
{
    console.log("First Listener :"  +data);
});

event.on('SecondEvent', function(data)
{
    console.log("Second Listener :" +data);
});

event.emit('FirstEvent','Helloo!!I am first event fired ');
event.emit('SecondEvent','Helloo! I am second event fired');

