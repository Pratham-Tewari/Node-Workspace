var fs=require('fs');
fs.readFile('test.html',function(err,data)
{
    if(err)
    console.error(err);
    console.log(data.toString());
});
console.log("Program Ended!!");