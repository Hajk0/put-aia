const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise();

async function fetchData() {
    try {
        const [rows] = await pool.query('SELECT * FROM items');
        return rows;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

async function getItem(id) {
    const [rows] = await pool.query(`
    SELECT *
    FROM items
    WHERE id = ?
    `, [id])
    return rows[0]
}

async function createItem(name, price) {
    const result = await pool.query(`
    INSERT INTO items (name, price)
    VALUES (?, ?) 
    `, [title, content])
    return result
}

async function main() {
    const items = await fetchData()
    console.log(items)
    const item = await getItem(1)
    console.log(item)
}

// main()
module.exports = { fetchData }