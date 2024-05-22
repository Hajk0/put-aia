const { fetchData } = require('./database')
const express = require('express');
const {readFile} = require('fs').promises;
const app = express();
const port = 3000;


app.use(express.static('public'));
app.use(express.json(limit = '1mb'));

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.urlencoded({ extended: true }));

let shoppingCart = [];
let items = [];
let message = 'Welcome to the store!';

app.get('/', async (req, res) => {
    try {
        items = await fetchData()
        console.log(items)

        res.render('pages/index.ejs', {items: items, message: message});
        message = 'Welcome to the store!';
        console.log('shoppingCart:', shoppingCart);
    } catch (err) {
        res.send('Error');
    }
});

app.get('/checkout', async (req, res) => {
    try {
        const cardItems = shoppingCart.map(itemId => {
            console.log('itemId:', itemId);
            const item = items.find((item) => (item.id == itemId));
            console.log(item);
            console.log('items:', items[0].id);
            return {
                id: item.id,
                name: item.name,
                price: item.price
            }
        });

        res.render('pages/checkout.ejs', {cart: cardItems});
    } catch (err) {
        res.send('Error');
    }
});

// Route to handle adding an item to the cart
app.post('/addToCart', (req, res) => {
    console.log('Shopping cart: ' + req.body.itemId);
    const itemId = req.body.itemId;
    // You can perform further validations here, e.g., if the item exists in the database

    // Add the item ID to the shopping cart
    if (!shoppingCart.includes(itemId)) {
        shoppingCart.push(itemId);
    }
    console.log(shoppingCart);

    // Send a response indicating success
    // res.status(200).send('Item added to cart successfully');
    res.redirect('/');
});

app.post('/removeFromCart', (req, res) => {
    console.log(req.body);
    const itemId = req.body.itemId;
    // You can perform further validations here, e.g., if the item exists in the database

    shoppingCart = shoppingCart.filter(id => id !== itemId);
    console.log(shoppingCart);

    // Send a response indicating success
    //res.status(200).send('Item removed from cart successfully');
    res.redirect('/checkout')
});

app.post('/cancelCheckout', (req, res) => {
    console.log('Checkout cancelled:', shoppingCart);
    shoppingCart = [];
    res.status(200).send('Checkout cancelled successfully');
    message = 'Checkout cancelled successfully';
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});