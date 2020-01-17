var express=require('express');
var mysql=require('mysql');
var app=express();
var pool=mysql.createPool(
    {
        host:'localhost',
        user:'root',
        password:'MariaDB',
        database:'test',
        debug:'false'
    });

    function handleDatabase(req,res)
    {
        pool.getConnection(function(err,connection)
        {
            if(err)
            {
                connection.release();
                res.json({"code":100,"Status":"Some Error occured"});
                return;
            }//if block

            console.log("CONNECTION ID IS: "+connection.threadId);
            connection.query('Select * from employeedetails',function(err,rows)
            {
                connection.release();
                if(!err)
                {
                    res.json(rows);
                }
            });
            connection.on('error', function(err) {      
                res.json({"code" : 100, "status" : "Error in connection database"});
                return;     
          });
        });
    }
    app.get("/",function(req,res)
    {
        handleDatabase(req,res);
});

app.listen(4000);