var fs=require('fs');
console.log("GETTING INFO OF THE FILE");
fs.stat('readfile.txt',function(err,stats)
{
    if(err)
    {
        return console.error(err);
    }
    console.log(stats);
    console.log("GEETING FILE INFO SUCCESFULLY");
    console.log("Is it is a File: "+ stats.isFile());
    console.log("Is it is a Directory: "+stats.isDirectory());
});
