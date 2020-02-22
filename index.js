const express=require("express");
const app = express();
const path=require("path");

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3');

const db=new sqlite3.Database("libri.db",function(){
    app.listen(3000);
});

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"public","index.html"));
});

app.get("/autori",function(req,res){
    const sql="SELECT * FROM autori;";
    db.all(sql,function(err,rows){
        console.log(rows);
        res.render("autori",{autori:rows});
    });
});

app.get("/libri",function(req,res){
    res.render("libri");
});

app.use(function(req,res){
    res.status(404).sendFile(path.join(__dirname,"public","404.html"));
});

//app.use( bodyParser.urlencoded({ extended: false }) );