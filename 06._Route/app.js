const express = require('express');
const morgan = require('morgan');

const userRouter = require('./userRouter');
const postRouter = require('./postRouter');




const app = express();

app.use(morgan('dev'));



//user Router
app.use('/user', userRouter);

//post Router

app.use('/posts', postRouter);

// app.get('/products/:prodId/reviews/:reviewId', (req, res) => {
//     console.log(req.params)
//     res.send('I am Listening ' + req.params.prodId + ' reviews '+ req.params.reviewId)
// });
app.get('/', (req, res)=>{
    res.send('<h1>NodeJs is Awesome !!!</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>404 ! <span> Your page is not Foud</span></h1>')
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is Runing is On PORT ${PORT}`);
});