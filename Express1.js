var express=require('express');
var app=express();

app.get('/',function(req,res)
{
    console.log("RUNNING EXPRESS MODULE EXAMPLE");
    res.send("Hi Pratham");
});

var server=app.listen(2000,function()
{
    var host=server.address().address;
    var port=server.address().port;
    console.log("WE ARE EXPRESS FRAMEWORK IN FOLLOWING ADDRESS AND PORT: ",host,port);
})