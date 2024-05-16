const { fetchData } = require('./database')
const express = require('express');
const {readFile} = require('fs').promises;
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.json(limit = '1mb'));

shoppingCart = [];

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

app.get('/checkout', async (req, res) => {
    try {
        const data = await readFile('./public/html/about.html', 'utf8');
        res.send(data);
    } catch (err) {
        res.send('Error');
    }
});

// Route to handle adding an item to the cart
app.post('/addToCart', (req, res) => {
    console.log(req.body);
    const itemId = req.body.itemId;
    // You can perform further validations here, e.g., if the item exists in the database

    // Add the item ID to the shopping cart
    shoppingCart.push(itemId);

    // Send a response indicating success
    res.status(200).send('Item added to cart successfully');
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});