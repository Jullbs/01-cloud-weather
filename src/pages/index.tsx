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
import { getAirInfo } from '@/services/getAirInfo'
import { getGoogleInfo } from '@/services/getGoogleInfo'

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

export interface AirData {
  aqi: number
  components: {
    PM2_5: number
    PM10: number
    SO2: number
    NO2: number
    O3: number
    CO: number
  }
}

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherData | undefined>(
    undefined,
  )
  const [airData, setAirData] = useState<AirData | undefined>(undefined)
  const [cityState, setCityState] = useState<string | undefined>(undefined)

  async function getWeatherData(location: LocationData) {
    const weatherInfo = await getWeatherInfo(location)
    const airInfo = await getAirInfo(location)
    const cityStateInfo = await getGoogleInfo(location)

    setWeatherData(weatherInfo)
    setAirData(airInfo)
    setCityState(cityStateInfo)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <Head>
        <title>Cloud Weather</title>
        <meta name="description" content="Weather page." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastContainer />
      <main className="relative h-full w-full lg:w-screen lg:h-screen bg-lilac-400 -z-50 antialiased py-10">
        <div className="h-full w-full flex flex-col lg:flex-row justify-center items-center gap-14">
          {weatherData ? (
            <>
              <DailyWeather
                currentWeatherData={weatherData.currentWeather}
                cityState={cityState}
              />
              <div className="flex flex-wrap justify-center content-center gap-6 lg:max-w-[36.125rem] w-full h-full">
                {airData && <AirQuality airData={airData} />}
                <SunHour currentWeatherData={weatherData.currentWeather} />
                <WeekWeather weekData={weatherData.weekData} />
              </div>
            </>
          ) : (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </>
          )}
        </div>

        <Image
          src={BackgroundImage}
          alt=""
          width={1366}
          height={768}
          className="absolute rounded-2xl -z-40 inset-0 m-auto object-contain hidden lg:block"
          priority
        />
      </main>
    </div>
  )
}
