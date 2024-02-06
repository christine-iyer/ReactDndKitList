const router = require('express').Router()
const flashcardCtrl = require('../../controllers/api/flashcards')


router.delete('/:id', flashcardCtrl.deleteFlashcard, flashcardCtrl.respondWithFlashcard)
router.put('/:id', flashcardCtrl.updateFlashcard, flashcardCtrl.respondWithFlashcard)
router.post('/', flashcardCtrl.createFlashcard, flashcardCtrl.respondWithFlashcard)
router.get('/:id', flashcardCtrl.getFlashcards, flashcardCtrl.respondWithFlashcard)
router.get('/', flashcardCtrl.getFlashcards, flashcardCtrl.respondWithFlashcards)
module.exports = router
