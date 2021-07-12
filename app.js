const express = require("express"),
path = require("path"),
app = express();



app.use(express.static('index.html'))


app.get("/", function(req,res){
    res.sendFile(path.join('index.html'))
});

app.listen(process.env.PORT || 8080);