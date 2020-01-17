var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname+'/form.html'));
});

app.post('/data',function(req,res)
{
    var name=req.body.name1 + ' '+ req.body.name2;
    res.send(name +" WELCOME TO MY PAGE");
});

var server=app.listen(5000,function()
{
    console.log("SERVER 5000 IS RUNNING");
});