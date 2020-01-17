var fs=require('fs');
var data=fs.readFileSync("test.html");
console.log(data.toString());
console.log("Program Ended!!");