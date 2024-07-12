# Hero-salona-trading-bot
backend 
mkdir solana-bot-backend
cd solana-bot-backend
npm init -y


installation
npm install express mysql2 body-parser dotenv


server.js - Main server file
db.js - Database connection and queries
.env - Environment variables (don't commit this to version control)
server connect
node server.js

javascript connect

async function processCommand(command) {
    try {
        const response = await fetch('http://localhost:3000/command', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ command }),
        });
        const data = await response.json();
        addMessage(data.response);
    } catch (error) {
        console.error('Error:', error);
        addMessage('An error occurred while processing your command.');
    }
}

install core package
npm install cors

server.js check
app.get('/test-db', async (req, res) => {
    try {
        const status = await db.getBotStatus();
        res.json({ status });
    } catch (error) {
        console.error('Database test failed:', error);
        res.status(500).json({ error: 'Database connection failed' });
    }
});
