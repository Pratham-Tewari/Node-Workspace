var fs=require('fs');
console.log("READING DATA FROM DIRECTORY TMP ");
fs.readdir("/tmp/",function(err,files)
{
    if(err)
    {
        return console.error(err);
    }// error block
    files.forEach(function(file)
    {
        console.log(file);
    });
});