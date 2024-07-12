const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

function addMessage(message, isUser = false) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user' : 'bot');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        processCommand(message);
        userInput.value = '';
    }
}

function processCommand(command) {
    
    let response;
    switch(command.toLowerCase()) {
        case 'status':
            response = "Bot is currently active and monitoring wallets.";
            break;
        case 'performance':
            response = "Current performance: +5% profit in the last 24 hours.";
            break;
        case 'help':
            response = "Available commands: status, performance, help";
            break;
        default:
            response = "Unknown command. Type 'help' for a list of commands.";
    }
    setTimeout(() => addMessage(response), 500); // Simulate processing delay
}

// Add initial bot message
addMessage("Welcome to the Solana Trading Bot interface. Type 'help' for available commands.");

// Allow sending message with Enter key
userInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
