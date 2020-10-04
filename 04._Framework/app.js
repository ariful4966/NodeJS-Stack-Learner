const express = require('express');

const app = express();

app.get('/about', (req, res) => {
    // res.send('<h1>I am About Page</h1>')
    res.json({
        message: 'I am a response from your route handler'
    })
})



app.get('/help', (req, res) => {
    res.send('<h1>I am Help Page</h1>')
})

app.get('/', (req, res) => {
    res.send('<h1>I am Listening</h1>')
});

app.get('*', (req, res) => {
    res.send('<h1>404 ! <span> Your page is not Foud</span></h1>')
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is Runing is On PORT ${PORT}`);
});