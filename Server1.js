var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res)
{
    var pathname=url.parse(req.url).pathname;
    console.log("Request for "+pathname+ " is generated!");
    fs.readFile(pathname.substr(1),function(err,data)
    {
        if(err)
        {
            console.log(err);
            res.writeHead(404,{'content-Type':'text/html'});
        }
        else{
            res.writeHead(200,{'content-Type':'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
}).listen(9000);
console.log("SERVER IS RUNNING AT PORT 9000");