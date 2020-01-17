var express=require('express');
var path=require('path');
var app=express();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname+'/socket.html'))
});

io.on('connection',function(socket)
{
    console.log('CONNECTION IS MADE');

     socket.on('disconnect',function()
    {
        console.log("disconnected");
    });
});

http.listen(9000,function()
{
    console.log("PROGRAM IS RUNNING IN PORT 9000");
})

