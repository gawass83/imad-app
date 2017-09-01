var express=require('express');
var morgan=require('morgan');
var path=require('path');

var app=express();
app.use(morgan('combined'));


var articles={
    articleone :{
                title:'Article one | Shubham Gawas',
                heading:'Article one',
                date:'Sept 5',
                content:
            `
                            <p>
                             this is the content of my first articlethis is the content of my first articlevthis is the content of my first articlethis is the content of my first articlethis is the content of my first articlethis is the content of my first articlethis is the content of my first articlethis is the content of my first articlethis is the content of my first articlethis is the content of my first articlethis is the content of my first article
                             </p>
                    
            `    },
    articletwo:{
         title:'Article two | Shubham Gawas',
                heading:'Article two',
                date:'Sept 5',
                content:
            `
                            <p>
                             this is the content of my two article.
                        </p> `
    },
};

function create(data)
{

var title=data.title;
var heading =data.heading;
var content=data.content;
var date=data.date;

var htmltemplate=`

<html>

    <head>
        
    <title> ${title}</title>
    </head>
    
    <body>
        <div>
            <a href="/">Home</a>
        </div>
        
        <div>
            <h3>
${heading}
</h3>
        </div>
        
        
        
        <div>
${date}
</div>
    ${content}
    </body>
</html>
  `  ;

    return htmltemplate;
} 
  
  
app.get('/',function(req,res){
res.sendFile(path.join(__dirname,'ui','index.html'));
});



app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(create(articles[articleName]));
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
