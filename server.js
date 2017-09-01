var express=require('express');
var morgan=require('morgan');
var path=require('path');

var app=express();
app.use(morgan('combined'));

app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','index.html'));
});


app.get('/articleone',function(req,res){
    res.sendFile(path.join(__dirname,'ui','articleone.html'));
});

app.get('/articleone',function(req,res){
    res.send("Article one is requested here");
});

app.get('/articletwo',function(req,res){
    res.send("Aricle two is requested here");
});

app.get('/ui/style.css',function(req,res){
res.sendFile(path.join(__dirname,'ui','style.css'));
});

app.get('/ui/madi.png',function(req,res){
res.sendFile(path.join(__dirname,'ui','madi.png'));
});


var port=80;
app.listen(80,function()
{
    console.log('IMAD course app listenig on port ${port}');
});
