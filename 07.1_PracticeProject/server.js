const express = require('express');
const postRouter = require('./postRouter');

const server = express();


server.use('/posts', postRouter);

server.get('/', (req, res)=> {
    res.send('<h1>App is on Home page</h1>')
})


server.get('*', (req, res)=>{
    res.send('<div><h1>404 Error!!!</h1><span>Sorry! Your Page Not Found</span></div>')
})

const PORT = process.env.PORT || 4200;


server.listen(PORT, () => {
    console.log(`Server is runing on Port ${PORT}`)
});