const http = require("http");
const Port = 5050;


http.createServer((req,res)=>{
    if(req.url == "/user")
    {
        res.write("<h1>Q. What is Node.js?</h1>")
        res.write("<p>Ans. Node.js is cross-platform and library for running javascript application outside the browser. It is used to create server-side and networking application . It uses an event driven, non-blocking I/O model that makes it lightweight and efficent.</p>")
        res.end();
    }
    else res.write("404 not found");
    res.end();
}).listen(Port,()=>
{
    try{
        console.log("Server is live on port 5050");
    }
    catch(err){
        console.log(`Error found ${err}`);
    }
})