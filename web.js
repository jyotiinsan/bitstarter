<<<<<<< HEAD
var express=require('express);
var fs=require('fs');
=======
var fs=require('fs');
var express = require('express');
>>>>>>> 0f9cc66d274e4e269fdb58a5f59447d3e7d83d2d
var htmlfile="index.html";
var app=express.createServer(express.logger());
app.get('/',function(request,response){
var html=fs.readFileSync(htmlfile).toString();
response.send(html);
});
var port=process.env.PORT || 8080;
app.listen(port,function(){
console.log("listening on "+port);
});

