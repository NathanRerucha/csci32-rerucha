import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-dvh w-lvw justify-center items-center pointer-events-none hover:bg-linear-to-r/increasing from-indigo-500 to-teal-400">
      <h1 className="h-32 text-8xl text-shadow-lg bg-linear-to-r/increasing from-indigo-500 to-teal-400 text-transparent bg-clip-text pointer-events-auto hover:text-black transition duration-1500 ease-in">
        "Creativity"
      </h1>
    </main>
  )
}
