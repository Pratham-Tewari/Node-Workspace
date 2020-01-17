var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path=require('path')
var fs=require('fs');
app.use(bodyParser.urlencoded({extended:false}));

app.get('/listusers',function(req,res)
{
    res.sendFile(__dirname + "/" + "user.json",'utf8',function(err,data)
    {
        if(err)
        {
          throw err; 
        }        
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

var server=app.listen(1000,function()
{
    var host=server.address().address;
    var port=server.address().port;
    console.log("APP IS RUNNING IN PORT NO: ",port,host);
})