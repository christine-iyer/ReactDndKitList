import React, { useState } from 'react'
import FlashcardList from '../components/FlashcardList'
import './styles.css'

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
          options: [
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
          options: [
               'Portland',
               'Oslo',
               'Lewiston',
               'Lisbon'
          ]
     }
]
