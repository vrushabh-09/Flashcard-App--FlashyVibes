// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const flashcardRoutes = require('./routes/flashcardRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Connect to MongoDB
const mongoURI = 'mongodb+srv://practical333444:RPV333444@flashyvibes.zgmfu.mongodb.net/yourDatabaseName'; // Replace 'yourDatabaseName' with your actual database name

mongoose.connect(mongoURI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Routes
app.use('/api/flashcards', flashcardRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
