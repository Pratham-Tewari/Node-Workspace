var fs=require('fs');
var buffer=new Buffer(1024);
console.log("OPENING A FILE DATA STARTS....");
fs.open('readfile.txt',function(err,fd)
{
    if(err)
    {
         return console.error(err);
    }
    console.log("FILE IS OPENED SUCCESFULLY!");

    fs.read(fd,buffer,0,buffer.length,0,function(err,bytes)
    {
        if(err)
        {
            return console.error(err);
        }
        console.log(bytes +" bytes of data is read from file");
        if(bytes>0)
        {
            console.log(buffer.slice(0,bytes).toString());
        }
    });
});