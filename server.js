// Dummy server to provide us the stuff
var express = require("express");
var app = express();

app.use("/node_modules", express.static(__dirname+"/node_modules"));
app.use("/js", express.static(__dirname+"/js"));
app.use("/css", express.static(__dirname+"/css"));
app.use("/dist", express.static(__dirname+"/dist"));

app.get("/", function(req, res) {
    res.sendFile(__dirname+"/index.html");
});

app.get("/greet", function(req, res) {
    res.status(200).send({
        message: "Message"
    });
});

app.listen(4000, function() {
    console.log("Listening on 4000");
});
