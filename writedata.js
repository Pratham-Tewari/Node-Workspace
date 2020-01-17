var fs=require('fs');
console.log("WRITING DETAILS IN THE FILE");
fs.writeFile('write.txt','Im writing data in a file using writeFile method',function(err)
{
    if(err)
    {
        console.log(err);
    }// if block
    console.log('DATA IS WRITTEN SUSSCEFULLY');
    console.log('READING A DATA FROM write.txt file');

    fs.readFile('write.txt',function(err,data)
    {
        if(err)
        {
            return console.error(err);
        }
        console.log(data.toString());
    })
});
