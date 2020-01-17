var app=require('express')();
var path=require('path');
var http=require('http').Server(app);
var io=require('socket.io')(http);
app.get('/',function(req,res)
{
 res.sendFile(path.join(__dirname+'/socketevent.html'));
});
var clients=0;
io.on('connection',function(socket)
{
    clients++;
    io.sockets.emit('broadcast',{description: clients +'connected'});
    socket.on('disconnect',function()
    {
        clients--;
        io.sockets.emit('broadcast',{description: clients +'connections'});
    });
});

http.listen(3000,function()
{
    console.log("APP IS RUNNING AT PORT 3000");
});