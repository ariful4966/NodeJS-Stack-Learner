require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const flash = require('connect-flash');
const config = require('config');


//Import Routes
const authRoutes = require('./routes/authRoute')
const dashboardRoutes = require('./routes/dashboardRoute')

//Import Middleware

const { bindUserWithRequest } = require('./middleware/authMiddleware')
const setLocals = require('./middleware/setLocals')

//playground Routes
// const validatorRoutes = require('./playground/validator') //todo should be removed

const PORT = process.env.PORT || 4000

const MONGO_URL = `mongodb+srv://${config.get('db-username')}:${config.get('db-password')}@cluster0.nine7.mongodb.net/blogData?retryWrites=true&w=majority`

// console.log(process.env.NODE_ENV);


const app = express();
console.log(config.get('name'))

// const config = require('./config/config')
// if (app.get('env').toLowerCase() === 'development') {
//     console.log(config.dev.name);
// } else {
//     console.log(config.prod.name);
// }
if (app.get('env').toLowerCase() === 'development') {
    app.use(morgan('dev'))
}
// console.log(app.get(`env`));

const store = new MongoDBStore({
    uri: MONGO_URL,
    collection: 'sessions',
    expires: 1000 * 60 * 60 * 2
});

//setup View Engine

app.set('view engine', 'ejs')
app.set('views', 'views')


//Middle ware Array
const middleware = [
    // morgan('dev'),
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json(),
    session({
        secret: config.get('secret'),
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    bindUserWithRequest(),
    setLocals(),
    flash()
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



mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
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