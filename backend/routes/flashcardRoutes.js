// backend/routes/flashcardRoutes.js
const express = require('express');
const router = express.Router();
const Flashcard = require('../models/Flashcard');

// Create a flashcard
router.post('/', async (req, res) => {
    const { question, answer } = req.body;

    try {
        const flashcard = new Flashcard({ question, answer });
        await flashcard.save();
        res.status(201).json(flashcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get all flashcards
router.get('/', async (req, res) => {
    try {
        const flashcards = await Flashcard.find();
        res.status(200).json(flashcards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update a flashcard
router.patch('/:id', async (req, res) => {
    const { question, answer } = req.body;

    try {
        const flashcard = await Flashcard.findByIdAndUpdate(req.params.id, { question, answer }, { new: true });
        if (!flashcard) return res.status(404).json({ message: 'Flashcard not found' });
        res.status(200).json(flashcard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a flashcard
router.delete('/:id', async (req, res) => {
    try {
        const flashcard = await Flashcard.findByIdAndDelete(req.params.id);
        if (!flashcard) return res.status(404).json({ message: 'Flashcard not found' });
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
