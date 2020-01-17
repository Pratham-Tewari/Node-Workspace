//step-1
var express = require('express');
var bodyparser = require('body-parse');
var app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//step-2
app.get('/signup',function(req,res){
 res.write('<html>');
res.write('<form action="http://localhost:3000/signup_submit" method="POST">');
res.write('<input type="text" name="uname" placeholder="Enter Full Name"> <br>'); 
res.write('<input type="email" name="uemail" placeholder="Enter Email-Address"> <br>'); 
res.write('<input type="password" name="upassword" placeholder="Enter Password"> <br>'); 
res.write('<button type="submit">Create New </button><br>');
res.write('<a href=http://localhost:3000/signin><button type="button">Log In</button></a>');
res.write('</form>');
res.write('</html>');
});
//step-3
app.post('signup_submit',function(req,res){
// DO WHATEVER YOU WANT WITH THE DATA
//step-4
console.log(req.body);
});
app.listen(3000);
