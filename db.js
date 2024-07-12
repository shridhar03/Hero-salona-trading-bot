const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
});

async function getBotStatus() {
    const [rows] = await pool.query('SELECT status FROM bot_status ORDER BY timestamp DESC LIMIT 1');
    return rows[0] ? `Bot status: ${rows[0].status}` : 'Bot status unknown';
}

async function getPerformance() {
    const [rows] = await pool.query('SELECT performance FROM bot_performance ORDER BY timestamp DESC LIMIT 1');
    return rows[0] ? `Current performance: ${rows[0].performance}% in the last 24 hours` : 'Performance data not available';
}

module.exports = {
    getBotStatus,
    getPerformance
};
