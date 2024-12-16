'use client'

import Link from 'next/link'
import { useState } from 'react'

const PlayingPage = () => {
  const [currentCard, setCurrentCard] = useState(0)

  // Array pertanyaan
  const questions = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequuntur.',
    'Question 2: Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    'Question 3: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    'Question 4: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.',
  ]

  const handleNextCard = () => {
    if (currentCard < questions.length - 1) {
      setCurrentCard(currentCard + 1)
    }
  }

  return (
    <main className="p-8 flex flex-col justify-between items-center min-h-screen">
      <p className="text-sm px-4 py-2 bg-gray-700 rounded-full">Teman</p>

      <div className="bg-white aspect-[4/5] rounded-lg p-8 flex justify-center items-center">
        <p className="text-black text-center">{questions[currentCard]}</p>
      </div>

      <div className="flex gap-4">
        <Link
          href={'/category'}
          className="border-blue-600 text-gray-400 px-4 py-2 rounded-lg text-sm text-center"
        >
          Kembali
        </Link>
        <p
          className="bg-blue-600 px-4 py-2 text-center text-sm cursor-pointer rounded-lg"
          onClick={handleNextCard}
        >
          Lanjut
        </p>
      </div>
    </main>
  )
}

export default PlayingPage
