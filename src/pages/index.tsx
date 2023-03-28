import { DailyWeather } from '@/components/DailyWeather'
import { AirQuality } from '@/components/AirQuality'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundImage from 'public/images/background.png'
import { WeekWeather } from '@/components/WeekWeather'
import { SunHour } from '@/components/SunHour'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import getLocation from '@/services/getLocation'
import { getWeatherInfo } from '@/services/getWeatherInfo'

interface LocationData {
  lat: number
  long: number
}

export interface WeatherData {
  currentWeather: {
    averageTemperature: number
    maxTemperature: number
    minTemperature: number
    weatherCode: number
    windSpeed: number
    uvIndex: number
    precipitationProbability: number
    sunrise: string
    sunset: string
  }
  weekData: {
    maxTemperatures: number[]
    minTemperatures: number[]
    weatherCodes: number[]
  }
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined,
  )

  async function getWeatherData(location: LocationData) {
    const weatherInfo = await getWeatherInfo(location)

    setWeatherData(weatherInfo)
  }

  function setPosition(position: any) {
    const location = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    }

    getWeatherData(location)
  }

  useEffect(() => {
    getLocation(setPosition)
  }, [])

  console.log(weatherData)

  if (weatherData) {
    return (
      <div>
        <Head>
          <title>Cloud Weather</title>
          <meta name="description" content="Weather page." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <ToastContainer />
        <main className="relative h-screen w-screen bg-lilac-400 -z-50">
          <div className="h-full w-full flex justify-center items-center gap-8">
            <DailyWeather currentWeatherData={weatherData.currentWeather} />
            <div className="flex flex-wrap justify-center content-center gap-6 max-w-[36.125rem] w-full h-full">
              <AirQuality />
              <SunHour />
              <WeekWeather weekData={weatherData.weekData} />
            </div>
          </div>

          <Image
            src={BackgroundImage}
            alt=""
            width={1366}
            height={768}
            className="absolute rounded-2xl -z-40 inset-0 m-auto object-contain"
            priority
          />
        </main>
      </div>
    )
  }
}
