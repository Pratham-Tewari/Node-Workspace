var app=require('express')();
var path=require('path');
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname+'/socket1.html'))
});
      io.on('connection',function(socket)
      {
        console.log("CONNECTION MADE");

        setTimeout(function()
        {
           socket.send("Sent a message after 4 seconds");
        },4000);

        socket.on('disconnect',function()
        {
            console.log("Diconnected");
        });
      });
      http.listen(4000,function()
      {
          console.log("App is running");
      });