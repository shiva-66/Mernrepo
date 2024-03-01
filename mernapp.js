var myExpress= require("express");
var myAxios=require("axios");
const myserver=myExpress();
const port=7000;

myserver.listen(port,()=>{

    console.log("Welcome mern full stack developer")
})
myserver.get("/",(req, res)=>{
res.send("<body bgcolor='lightblue'><h1>Welcome to mern full stack devleoper<h1><body>");
})
myserver.get("/cloudchain",(req, res)=>{
    res.sendFile(__dirname+'/pages/cloudchain.html');
    })

let headrequest={
    "headers":{
        "x-apikey":"657c537763ede90d96f17207",
    }
}
myserver.get("/cctusers",(req, res)=>{
    myAxios.get("https://healthtracker-06c0.restdb.io/rest/cctusers",headrequest)
    .then((resp)=>{
        res.send(resp.data)
    })
    .catch((err)=>{
        res.send(err);
    })
    })
myserver.get("*",(req, res)=>{
        res.redirect("/");
        })