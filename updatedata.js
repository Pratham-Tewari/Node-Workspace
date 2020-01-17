var express=require('express');
var mysql=require('mysql');
var bodyParser=require('body-parser');
var connection=mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'MariaDB',
        database:'test'
    });// connection
    var app=express();
    app.use(bodyParser.json());
   app.use(bodyParser.urlencoded({extended:true}));
    
    connection.connect(function(err)
    {
        if(!err)
        {
            console.log('DATABASE IS CONNECTED SUCCESFULLY');
        }//if block
        else
        {
            console.log('ERROR IN CONNECTING WITH DATABSE');
        }//else block
    });//connection is established here
    app.post("/",function(req,res)
    {
        console.log(req.body);
        connection.query('Update employeedetails SET EmpName= ? WHERE EmpId=?',[req.body.name,req.body.id],function(err,rows,fields)
        {
            connection.end();
            if(!err)
            {
                console.log("DETAILS ARE AS FOLLOWS :",rows);
                res.json(rows);
            }//if block
            else
            {
             console.log('THERE IS SOME ERROR IN FETCHING THE DATA FROM DATABASE');
            }//else block
        });
    }).listen(5000);
    console.log('SERVER IS LISTENING TO PORT 5000');