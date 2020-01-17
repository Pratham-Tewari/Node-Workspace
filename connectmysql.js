var express=require('express');
var mysql=require('mysql');
var connection=mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password:'MariaDB',
        database:'test'
    });// connection

    var app=express();
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
    app.get("/",function(req,res)
    {
        console.log(req.query);
        connection.query('Select * from employeedetails where EmpId= ?',[req.query.id],function(err,rows,fields)
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
    }).listen(3000);
    console.log('SERVER IS LISTENING TO PORT 3000');