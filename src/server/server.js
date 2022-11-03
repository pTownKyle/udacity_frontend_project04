// Bring in required modules
const path = require('path');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

// Initialize & configure express
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));

// Get MeaningCloud API credentials from .env file
const meaningCloudKey = process.env.MEANING_CLOUD_LICENSE_KEY;

// Send URL to MeaningCloud API
app.post('/analyze', (req, res) => {
    const data = req.body;
    const url = data.url;

    fetch(
        `https://api.meaningcloud.com/sentiment-2.1?key=${meaningCloudKey}&url=${data.url}&lang=en`
    )
        .then((response) => response.json())
        .then((data) => {
            const subjectivity = data.subjectivity;
            const confidence = data.confidence;
            const irony = data.irony;

            res.json({
                subjectivity: subjectivity,
                confidence: confidence,
                irony: irony,
            });
        });
});

// Setup Port
const port = 3030;

app.listen(port || process.env.PORT, () => {
    console.log('Server is running on port 3030');
});
