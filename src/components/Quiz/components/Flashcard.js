import React, {useState} from 'react'

export default function Flashcard({ flashcard }) {
  return (
    <div> {flashcard.id}. {flashcard.question}? The answer is {flashcard.answer}. ►</div>
  )
}
