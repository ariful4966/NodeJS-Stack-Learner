const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const router =require('./routes');




const app = express();

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// let Schema = mongoose.Schema;
// let testSchema = new Schema({
//     name: String
// });

// let Test = mongoose.model('Test', testSchema);
app.use('/contacts', router);

app.get('/', (req, res) => {

//   let test = new Test({
//       name: 'Ariful Islam'
//   });
//   test.save()
//   .then(t=>{
//       res.json(t)
//   })
//   .catch(e=>{
//       console.log(e)
//       res.status(500).json({
//           error: 'Error Occurred'
//       })
//   })
})

const port = process.env.port || 8080;
const uri = `mongodb+srv://nodedb:node82db@cluster0.nine7.mongodb.net/nodedb?retryWrites=true&w=majority`;




mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        app.listen(port, () => {
            console.log(`Your port is rinning on port ${port}`)
        })
    })
    .catch(e => {
        console.log(e)
    })

