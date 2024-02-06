require('dotenv').config()
const Flashcard = require('../../models/flashcard')

const deleteFlashcard = async (req, res, next) => {
     try {
         const deletedFlashcard = await Flashcard.findByIdAndDelete(req.params.id)
         res.locals.data.flashcard = deletedFlashcard
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const updateFlashcard = async (req, res, next) => {
     try {
         const updatedFlashcard = await Flashcard.findByIdAndUpdate(req.params.id, req.body, { new: true })
         res.locals.data.flashcard = updatedFlashcard
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const createFlashcard = async (req, res, next) => {
     try {
         const createdFlashcard = await Flashcard.create(req.body)
         res.locals.data.flashcard = createdFlashcard
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 
 const getFlashcards= async (req, res, next) => {
     try {
         
         const flashcards = await Flashcard.find(req.body)
         res.locals.data.flashcards = flashcards 
         flashcards.reverse()
         next()
     } catch (error) {
         res.status(400).json({ msg: error.message })
     }
 }
 const respondWithFlashcards = (req, res) => {
     res.json(res.locals.data.flashcards)
 }
 
 const respondWithFlashcard = (req, res) => {
     res.json(res.locals.data.flashcard)
 }
 
 
 
 module.exports = {
     deleteFlashcard,
     updateFlashcard,
     getFlashcards,
     createFlashcard,
     respondWithFlashcard, 
     respondWithFlashcards
 }