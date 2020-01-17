var express=require("express");
var app=express();
var bodyParser=require("body-parser");
var path=require('path');
var multer=require("multer");
var port=process.env.PORT || 9000;
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('Node_Workspace'));
function getextension(fliemimetype)
{
        var data=fliemimetype.split("/");
        console.log(data[1]);
        return data[1];
}
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, __dirname+'/uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+'.'+getextension(file.mimetype))
    }
  })
   
  var upload = multer({ storage: storage })

  app.post('/uploadfiles', upload.single('file1'), (req, res, next) => {
    const file = req.file
    if (!file) 
    {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    else
    {
        console.log("File Uploaded Succesfully");
         res.send(file);
    }
     
  })


app.get('/',function(req,res)
{
    res.sendFile(path.join(__dirname+'/postfile.html'));
})

app.post('/uploadfiles',upload.any('file1'),function(req,res)
{
    console.log(req.files[0].filename);

    var file=__dirname +"/"+ req.files[0].filename;

}).listen(port);//app.post
console.log("APP IS RUNNING IN LOCALHOST WITH PORT NO: "+port);


