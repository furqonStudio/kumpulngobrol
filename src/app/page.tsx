import Image from 'next/image'
import Link from 'next/link'
// font-[family-name:var(--font-geist-sans)]
export default function Home() {
  return (
    <main className="p-8 flex justify-center items-center min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-4xl">Kumpul Ngobrol</h1>
        <p className="text-gray-400 text-sm">
          Mainkan kartu pertanyaan, eratkan hubungan
        </p>
        <Link
          href={'/category'}
          className="bg-blue-600 px-4 py-2 rounded-lg text-sm mt-8 min-w-44 text-center"
        >
          Mainkan sekarang
        </Link>
      </div>
    </main>
  )
}
