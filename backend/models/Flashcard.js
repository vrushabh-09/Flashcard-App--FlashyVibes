// backend/models/Flashcard.js
const mongoose = require('mongoose');

const flashcardSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model('Flashcard', flashcardSchema);
