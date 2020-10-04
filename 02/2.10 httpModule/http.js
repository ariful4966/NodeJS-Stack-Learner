const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    res.end('<h1>Hello NodeJs, Your are Buauty</h1>')
});

server.listen(4141, ()=>{
    console.log('Server is Running is on port 4141')
})