var express = require('express');
var path = require('path');

var app         =   express();
var router      =   express.Router();
app.use(express.static('src'));

router.get("/",function(req,res) {
 res.sendFile(path.join(__dirname+'/index.html'));
});

app.use('/',router);
app.listen(1234);
console.log("Listening to PORT "+'1234');