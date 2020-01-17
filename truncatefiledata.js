var fs=require('fs');
var buffer=new Buffer(1024);
console.log("OPENING OF FILE STARTS!!");
fs.open('readfile.txt', 'r+' ,function(err,fd)
{
   if(err)
   {
       return console.error(err);
   }//open file error block
  console.log("FILE IS OPEN SUCCESFULLY!!");
  fs.truncate(fd,10,function(err)
  {
      if(err)
      {
          return console.error(err);
      }//trucate file error block
      console.log("DATA IS TRUNCATED SUCCESFULLY FROM THE FILE!!");

      fs.read(fd,buffer,0,buffer.length,0,function(err,bytes)
      {
          if(err)
          {
              return console.error(err);
          }//reading file error block
          console.log(bytes +" bytes data is read from file!!");
          if(bytes>0)
          {
              console.log(buffer.slice(0,bytes).toString());
          }// no of bytes block
          console.log(__filename);
          console.log(__dirname);
      });
  });
});