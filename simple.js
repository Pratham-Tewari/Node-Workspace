var http=require('http');
var server=http.createServer(function(req,res)
{
    res.writeHead(200,{"content-type":"text/html"});
    res.write("Hi Pratham Tewari");
    res.end();
});
server.listen(1000);