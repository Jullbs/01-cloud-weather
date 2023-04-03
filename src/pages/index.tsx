import { DailyWeather } from '@/components/DailyWeather'
import { AirQuality } from '@/components/AirQuality'
import Head from 'next/head'
import Image from 'next/image'
import BackgroundImage from 'public/images/background.png'
import { WeekWeather } from '@/components/WeekWeather'
import { SunHour } from '@/components/SunHour'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import getLocation from '@/services/getLocation'
import { getWeatherInfo } from '@/services/getWeatherInfo'
import { getAirInfo } from '@/services/getAirInfo'
import { getGoogleInfo } from '@/services/getGoogleInfo'
import { AirData, LocationData, WeatherData } from '@/types'
import Loading from '@/components/Loading'

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

  // eslint-disable-next-line no-undef
  const setPosition: PositionCallback = (position) => {
    const location = {
      lat: position.coords.latitude,
      long: position.coords.longitude,
    }

    getWeatherData(location)
  }

  // eslint-disable-next-line no-undef
  const showError: PositionErrorCallback = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        toast.warn(
          'O usuário recusou o pedido do Geolocation, favor ir nas configurações de seu navegador e alterar.',
        )
        break
      case error.POSITION_UNAVAILABLE:
        toast.warn('A informação sobre localização está indisponível.')
        break
      case error.TIMEOUT:
        toast.warn(
          'A solicitação para autorizar a localização expirou, favor atualizar a página.',
        )
        break
    }
  }

  const locationNotCompatibleWithBrowser = () => {
    toast.error('Geolocation não é compatível com esse navegador.')
  }

  useEffect(() => {
    getLocation({ setPosition, showError, locationNotCompatibleWithBrowser })
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
                <WeekWeather weekWeather={weatherData.weekWeather} />
              </div>
            </>
          ) : (
            <Loading />
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
