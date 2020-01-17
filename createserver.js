var http=require('http');
var server=http.createServer(function(req,res)
{
    if(req.url=="/")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<htmL><body><h1>WELCOME TO HOME PAGE</h1></body></html>");
        res.end();
    }
    else if(req.url=="/info")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<htmL><body><h1>Hi USERS! MY NAME IS PRATHAM TEWARI,I'M FROM HCL TECHNOLIGIES</h1></body></html>");
        res.end();
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write("<htmL><body><h1>Hi USERS! MY NAME IS PRATHAM TEWARI,MY CONTACT NO IS 90133550654</h1></body></html>");
        res.end();
    }
    else
    {
       res.end("INVALID URL!!!!!");
    }

}).listen(5000);
console.log("PORT 5000 IS RUNNING!!!");