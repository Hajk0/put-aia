const { fetchData } = require('./database')
const express = require('express');
const mysql = require('mysql')
//const { readFile } = require('fs');
const {readFile} = require('fs').promises;
const app = express();
const port = 3000;


app.use(express.static('public'));

app.get('/', async (req, res) => {
    try {
        const items = await fetchData()
        console.log(items)

        const data = await readFile('./public/html/index.html', 'utf8');

        const renderData = data.replace('{{items}}', JSON.stringify(items))
        res.send(renderData);
    } catch (err) {
        res.send('Error');
    }
});

app.get('/database', async (req, res) => {
    try {
        const sql = "SELECT * FROM Items";
        db.query(sql, (err, data) => {
            if (err) {
                return res.json('DB error');
            } else {
                return res.json(data);
            }
        })
    } catch (err) {
        res.send('Error');
    }
});

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