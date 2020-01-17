var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mysql=require('mysql');
var connection=mysql.createConnection(
    {
        host:'localhost',
        user:'root',
        password:'MariaDB',
        database:'test'
    });
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    connection.connect(function(err)
    {
        if(!err)
        {
            console.log("CONNECTION IS ESTABLISHED SUCCESFULLY");
        }
        else{
            console.log("THERE IS SOME EROOR");
        }
    });
    app.post("/",function(req,res)
    {
         console.log(req.body);
         connection.query('Insert into employeedetails(EmpName,EmpIncome,EmpCity) values(?,?,?)',[req.body.name,req.body.income,req.body.city],function(err,roes,fields)
         {
             connection.end();
             if(!err)
             {
                 console.log("ROW IS ADDED SUCCESFULY");
             }
             else
             {
                 console.log("THERE IS SOME EROOR");
             }
         });
    }).listen(8000);
    console.log("SERVER IS LISTENING TO PORT NO:8000");