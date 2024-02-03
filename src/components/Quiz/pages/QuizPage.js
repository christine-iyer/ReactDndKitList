import React, { useState } from 'react'
import FlashcardList from '../components/FlashcardList'


export default function QuizPage() {
     const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
     return (
          <div>
               <FlashcardList 
               flashcards={flashcards} />
          </div>
     )
}
const SAMPLE_FLASHCARDS = [
     {
          id: 1,
          question: "What is 3*3",
          answer: 9,
          option: [
               '9',
               '11',
               '6',
               '21'
          ]
     },
     {
          id: 2,
          question: "What is the capitol of Maine",
          answer: 'Augusta',
          option: [
               'Portland',
               'Oslo',
               'Lewiston',
               'Lisbon'
          ]
     }
]
