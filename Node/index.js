const express = require('express');
//const { readFile } = require('fs');
const {readFile} = require('fs').promises;
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const data = await readFile('./public/html/index.html', 'utf8');
        res.send(data);
    } catch (err) {
        res.send('Error');
    }
});

/*app.get('/about', (req, res) => {
    readFile('./public/html/about.html', 'utf8', (err, data) => {
        if (err) {
            res.send('Error');
        } else {
            res.send(data);
        }
    });
});*/

app.get('/contact', async (req, res) => {
    try {
        const data = await readFile('./public/html/about.html', 'utf8');
        res.send(data);
    } catch (err) {
        res.send('Error');
    }
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});