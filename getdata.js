var express=require('express');
var app=express();

app.use(express.static('public'));
app.get('form.html',function(req,res)
{
    res.sendFile(path.join(__dirname+'/form2.html'));
})

app.get('data',function(req,res)
{
    response={
        First_Name:req.query.name1,
        Last_Name:req.query.name2
    };
    console.log(response);
    res.end(JSON.stringify(response));
})

var server=app.listen(3000,function()
{
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
})