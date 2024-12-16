import Link from 'next/link'
import React from 'react'

const CategoriesPage = () => {
  return (
    <main className="p-8 min-h-screen grid grid-cols-2 gap-2 py-40">
      {Array.from({ length: 4 }).map((_, index) => (
        <Link
          key={index}
          href={index === 0 ? '/play' : '#'}
          className="bg-white rounded-lg text-black text-sm flex justify-center items-center font-bold"
        >
          <p>{`Kategori ${index + 1}`}</p>
        </Link>
      ))}
    </main>
  )
}

export default CategoriesPage
