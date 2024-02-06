const { Schema, model } = require('mongoose')

const flashcardSchema = new Schema({
     question: { type: String, required: true },
     answer: { type: String, required: true },
     options: []
}, {
     timestamps: true
})

module.exports = model('Flashcard', flashcardSchema)