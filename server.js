var http=require('http');
var dt=require('./date');
http.createServer(function (request,response)
{
  response.writeHead(200,{'Content-Type':'text/plain'});
  response.write("Hello Pratham Tewari!!!");
  response.write("CURRENT DATE IS :" +dt.myDateTime())
  response.end();
}).listen(8000);
