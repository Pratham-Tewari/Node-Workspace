var fs=require('fs');
fs.readFile('test.html',function(err,data)
{
    if(err)
    {
        console.error(err);
    }
    console.log("Asynchronus data: "+data.toString());
});

var data=fs.readFileSync('test.html');
console.log("Synchronus data: "+data.toString());
console.log("PROGRAM ENDED");