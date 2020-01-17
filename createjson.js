var http=require('http');
var port=process.env.PORT || 2000;
var server=http.createServer(function(req,res)
{
    res.writeHead(200,{'Context-Type':'application/json'});
    res.write(JSON.stringify({message:"Hi Pratham Tewari","number":"9013550654"
}));
    res.end();
}).listen(port);
console.log("RUNNING JSON OBJECT USING NODE.JS");