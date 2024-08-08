var express = require("express");
var mdb = require('mongoose')
var User = require('./models/userSchema')
var app = express();
mdb.connect("mongodb+srv://ksprasanthksp10:Ksp%401009@skcet.ow7ni.mongodb.net/SKCET")
var db = mdb.connection
db.once("open",()=>{
    console.log("MongoDB Connection Successful");
})
app.get("/", (request, response) => {
  response.send("Welcome to Backend Server");
});

app.get("/signup",(request, response)=>{
    var [email, username, name, password] = ["rampex@skcet.ac.in","rampex","RAMPeX","123456"];
    var newUser = new User({
        email:email,
        username:username,
        name:name,
        password:password
    }) 
    newUser.save().then(()=>{
        console.log(response);
        return response.json({message:"User Added"})
    }).catch((e)=>{
        console.log(e);
        return response.json({message:e})
    })
})
app.listen(3001, () => console.log("Backend Started"));
