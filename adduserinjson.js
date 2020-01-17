var express=require('express');
var app=express();
var path=require('path');
var fs=require('fs');
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

var user={
    "user4":
    {
               "name":"Vikyath Sharma",
               "age":"19",
               "profession":"software Engineer"
    }
}
app.post('/adduser',function(req,res)
{

  res.sendFile(__dirname + "/" + "user.json",'utf8',function(err,data)
{
    data=JSON.parse(data);
    data["user4"]=user["user4"];
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