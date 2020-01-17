var fs=require('fs');
fs.readFile('test.html',function(err,data)
{
    debugger;
    if(err) throw err;
    console.log(data);
});