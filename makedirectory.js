var fs=require('fs');
console.log("MAKING A DIRECTORY!!");
fs.mkdir('/tmp/test',function(err)
{
    if(err)
    {
        return console.error(err);
    }// if block
    console.log("DIRECTORY IS MADE SUCCESFULLY!!");
});