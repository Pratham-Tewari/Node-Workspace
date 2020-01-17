var http=require('http');
var fs=require('fs');

http.createServer(function (req,res)
{
    fs.readFile('test.html', function(err,data)
    {
        if(err) throw err;
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        getfile.js
         res.end();
    });
}).listen(8001);
console.log(__dirname);
console.log(__filename);