var fs=require('fs');
console.log("GETING INFO OF HTML FILE!!");
fs.stat('test.html',function(err,stats)
{
    if(err)
    {
    return console.error(err);
    }
    console.log(stats);
    console.log("DATA READ SUCCESSFULLY!!");
    console.log(" isFile ? " + stats.isFile());
    
});