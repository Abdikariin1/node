const http = require('http');
const { json } = require('stream/consumers');

const  port = 9000;
const HOSTNAME = 'localhost';

const server = http.createServer((req, res)=>{
    if(req.url.startsWith('./tasks')){
        // TODO: Implement this method
        taskRoutes(req,res)
    }
    else{
        res.writeHead(404,'Not Found',{'content-type':'application'})
        res.end(JSON.stringify({
            message : 'page not found'
        }))
    }
})

server.listen(port, HOSTNAME, () => {
    console.log("server is running on port ${port}")
})