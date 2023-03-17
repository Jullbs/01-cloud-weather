import { DailyWeather } from '@/components/DailyWeather'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundImage from 'public/images/background.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cloud Weather</title>
        <meta name="description" content="Weather page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative h-screen w-screen bg-lilac-400 -z-50">
        <div className="h-screen w-screen flex justify-center items-center gap-8">
          <DailyWeather />
        </div>

        <Image
          src={BackgroundImage}
          alt=""
          width={1366}
          height={768}
          className="absolute rounded-2xl -z-40 inset-0 m-auto object-contain"
        />
      </main>
    </div>
  )
}
