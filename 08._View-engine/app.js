const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'templete/views')

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/about', (req, res)=>{

    res.render('pages/about');
});
app.get('/help', (req, res)=>{
    res.render('pages/help')
});
app.get('/test', (req, res)=>{
    res.render('pages/test')
})

app.get('/', (req, res) => {
    let post ={
        title:'Test Title',
        body:'Test Body',
        published: true
    }

    let posts = [
        {title:'Title One', author: 'Ariful Islam'},
        {title:'Title Two', author: 'Ariful Islam'},
        {title:'Title Three', author: 'Ariful Islam'},
        {title:'Title Four', author: 'Ariful Islam'},
    ]
    res.render('pages/index', {title:'Ejs is an Awesome Template Engine', post, posts, page:'Home Page'}, ) ; 
})


const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

//8.3
//9.5