const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
require('dotenv').config();

//Import Routes
const authRoutes = require('./routes/authRoute')
const dashboardRoutes = require('./routes/dashboardRoute')

//Import Middleware

const {bindUserWithRequest} = require('./middleware/authMiddleware')
const setLocals = require('./middleware/setLocals')

//playground Routes
// const validatorRoutes = require('./playground/validator') //todo should be removed

const PORT = process.env.PORT || 4000
const url = process.env.DB_PATH

const app = express();

const store = new MongoDBStore({
    uri: url,
    collection: 'sessions',
    expires: 1000*60*60*2
  });

//setup View Engine

app.set('view engine', 'ejs')
app.set('views', 'views')


//Middle ware Array
const middleware = [
    morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json(),
    session({
        secret:process.env.SECRET_KEY || 'SECRET_KEY',
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    bindUserWithRequest(),
    setLocals()
];
app.use(middleware);

app.use('/auth', authRoutes);
app.use('/dashboard', dashboardRoutes)     
// app.use('/playground', validatorRoutes) //Todo Should be removed
app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    })
})
     


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database Connected')
        app.listen(PORT, () => {
            console.log(`Server is running on PORT ${PORT}`)
        });
    }).catch(e => {  
       return console.log(e)
    })


 

//Front End Validation
//Backend Validation
//Database Validation 