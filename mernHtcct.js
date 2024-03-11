var myexpress=require("express");
var myaxios= require("axios");

const myServer= myexpress();
const port=2000;

myServer.listen(port,()=>{
    console.log("My express server is started on 2000");
});

myServer.get("/",(req,res)=>{
    console.log("Received home page request");
    res.sendFile(__dirname+"/htcctgit/index.html");
});

myServer.get("/RegistrationForm.html",(req,res)=>{
    console.log("Received home page request");
    res.sendFile(__dirname+"/htcctgit/RegistrationForm.html");
});

myServer.get("/UserProfileForm.html",(req,res)=>{
    console.log("Received home page request");
    res.sendFile(__dirname+"/htcctgit/UserProfileForm.html");
});