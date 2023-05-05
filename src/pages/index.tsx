import Head from 'next/head'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Makunike Family</title>
        <meta name="description" content="Makunike Family" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-4xl text-red-700">Makunike Family</h1>
      </main>
    </>
  )
}
