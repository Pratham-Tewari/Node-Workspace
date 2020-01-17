var fs=require('fs');
console.log("OPENING A FILE.");
fs.open('readfile.txt','r+',function(err,data)
{
    if(err)
     {
       return console.error(err);
     }
    console.log("FILE IS OPENED SUCCESFLLY");
});