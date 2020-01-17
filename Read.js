var fs=require('fs');
fs.readFile('readfile.txt', function(err,data)
{
    if(err)
    {
    return console.error(err);
    }
    console.log(data.toString());
});

var data=fs.readFileSync('readfile.txt')
console.log(data.toString());