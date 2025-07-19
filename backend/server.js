const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Sample API endpoint
app.get('/api/message', (req, res) => {
    const messages = [
        "Welcome to Kubernetes!",
        "This is a sample project with frontend + backend.",
        "You have successfully deployed a multi-tier app.",
        "Kubernetes is amazing!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    res.json({ message: randomMessage });
});

app.listen(port, () => {
    console.log(`Backend server running on http://localhost:${port}`);
});
