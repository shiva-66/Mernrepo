var myexpress = require('express')
var myaxios = require('axios')
var mycors=require('cors')
var myutils=require('./models/utilities.js')
var usersData=require('./models/users.js')


const myServer = myexpress();
const port = 1000;

myServer.use(mycors())
myServer.use(myexpress.static('public'));
myServer.use(myexpress.json());
/*
myServer.listen(port, function(){
    console.log("My Express Server is started on 8000");
});
*/

myServer.listen(port, ()=>{
    //console.log("My Express Server is started on 2000");
});

myServer.get("/", function(req,res){
    console.log("Received Home Page request");
    res.send("<html><body bgcolor='lightblue'><h1>Welcome to Node JS Web World!!!!!!!!!!</h1> <h1>This is our first Web Server</h1></body></html>");
});

myServer.get("/admin", function(req,res){
    //console.log("Received Contact Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./contact.html');
    res.sendFile(__dirname+"/adminpage.html");
});

myServer.get("/test", (req,res)=>{
    //console.log("Received test Page request");  
    res.send("<h1 style='color:green'>This is a test page</h1>");
});


//From this point we're starting REST API invocations..
//Using AXIOS

myServer.get("/getreqresusers", (req,res)=>{

    myaxios.get("https://reqres.in/api/users")
    .then(resp => {
        //console.log("response=",resp.data);
        res.send(resp.data);
    })
    .catch(err => {
        //console.log("error in api call..",err);
        res.send(err);
    })

});

/// NEW ADMIN PAGE -- starts here

myServer.get("/newadmin", function(req,res){
    //console.log("Received New Admin Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./contact.html');
    res.sendFile(__dirname + "/newadminpage.html");
});

  //get users data
myServer.get("/cctusers",usersData.users);    //get users data


myServer.get("/addnewuser", function(req,res){
    console.log("Received New Admin Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./contact.html');
    res.sendFile(__dirname + "/addnewuser.html");
});
/*
const axios = require('axios');
let data = JSON.stringify({
  "username": "abc",
  "email": "shiv@cct.com",
  "password": "shiv@cct",
  "mobile": "9087654321"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://healthtracker-06c0.restdb.io/rest/cctusers',
  headers: { 
    'x-apikey': '657c537763ede90d96f17207', 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
*/
         
 
 // create user route
myServer.post("/addinguser", usersData.createUser) 

//Delete operation using axios and express
myServer.delete("/deleteuser", usersData.delUser);

//edit user data page or add new user data page
myServer.get("/addnewuser/:id",function(req,res){
    res.sendFile(__dirname + "/addnewuser.html");
})

//update operation with patch method using axios and express
myServer.patch("/edituserdata", usersData.editUser);

myServer.get('/factorial',(req,res)=>{
    res.status(200);
    let fact=myutils.getFactorial(5);
    res.send('<h1>Factorial of 5 is :'+fact+'</h1>');
})

myServer.get('/product/:num1/:num2',myutils.product);
myServer.get('/fiboseries/:maxNo',myutils.fibo);

//Any other path other than the above routes, redirect to homepage
myServer.get("*", function(req,res){
    console.log("Received Invalid Page request");
    //console.log("__dirname value=", __dirname);
    //res.sendFile(__dirname'./contact.html');
    //res.send("<h1 style='color:red'>Page NOT AVAILABLE </h1>");
    //or redirect like below
    res.redirect("/");
});



