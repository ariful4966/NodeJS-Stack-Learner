const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

//Import Routes
const authRoutes = require('./routes/authRoute')

const app = express();


//setup View Engine

app.set('view engine', 'ejs')
app.set('views', 'views')

//Middle ware Array
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json()
];
app.use(middleware);

app.use('/auth', authRoutes);
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})

const PORT = process.env.PORT || 4000
const uri = process.env.DB_PATH;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected')
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        });
    }).catch(e => {
       return console.log(e)
    })


 

//13.6complete