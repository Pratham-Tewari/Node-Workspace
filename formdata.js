var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var path = require('path');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));
console.log("GETTING DATA FROM FORM.....");
app.get('/form2.html',function(req,res)
{
    res.sendFile(path.join(__dirname+'/form2.html'));
});

app.post("/getdetails",function(req,res)
{
    console.log(req);
    response={
       "First_Name":req.body.name1,
       "Last_Name":req.body.name2

    };
    console.log(response);
    res.end(JSON.stringify(response));
})
var server=app.listen(9000,function(req,res)
{
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening port: ", host, port)
 })
