const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/command', async (req, res) => {
    const { command } = req.body;
    let response;

    try {
        switch(command.toLowerCase()) {
            case 'status':
                response = await db.getBotStatus();
                break;
            case 'performance':
                response = await db.getPerformance();
                break;
            case 'help':
                response = "Available commands: status, performance, help";
                break;
            default:
                response = "Unknown command. Type 'help' for a list of commands.";
        }
    } catch (error) {
        console.error('Error processing command:', error);
        response = "An error occurred while processing your command.";
    }

    res.json({ response });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
