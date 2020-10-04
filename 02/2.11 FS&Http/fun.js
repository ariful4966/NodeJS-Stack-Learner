const fs = require('fs');
const http = require('http');
const port = 4141;

const server = http.createServer((req, res) => {
    // res.end('<h1>Ariful Islam</h1>');
    fs.readFile('./index.html', (err, data) => {
        res.write(data);
        res.end();
    })
});
server.listen(port, () => {
    console.log(`Server is Running On Port ${port}`)
});