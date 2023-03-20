import { DailyWeather } from '@/components/DailyWeather'
import { AirQuality } from '@/components/AirQuality'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundImage from 'public/images/background.png'
import { WeekWeather } from '@/components/WeekWeather'

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
        <div className="h-full w-full flex justify-center items-center gap-8">
          <DailyWeather />
          <div className="flex flex-col justify-center items-center gap-6 max-w-[36.125rem] w-full h-full">
            <AirQuality />
            <WeekWeather />
          </div>
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
