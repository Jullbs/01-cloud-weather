import { getWeatherIcon } from '@/util/getWeatherIcon'
import Image from 'next/image'
import CloudBackground from 'public/images/cloud-background.png'

interface DailyWeatherProps {
  currentWeatherData: {
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
}

function WeatherInfoCard({ currentWeatherData }: DailyWeatherProps) {
  return (
    <div className="flex justify-between text-lilac-100 gap-2 font-normal text-xs w-full">
      <div className="flex py-3 px-4 bg-lilac-500/60 rounded-md gap-3 max-w-36 max-h-15 w-full h-full">
        <span className="icon-[mdi--windy] w-8 h-8 opacity-60 my-auto"></span>
        <div>
          <h2>Vento</h2>
          <p className="flex items-end gap-1 leading-4 text-sm">
            <strong className="text-lilac-150 text-lg font-bold leading-5">
              {Math.round(currentWeatherData.windSpeed)}
            </strong>{' '}
            km/h
          </p>
        </div>
      </div>
      <div className="flex py-3 px-4 bg-lilac-500/60 rounded-md gap-3 max-w-36 max-h-15 w-full h-full">
        <span className="icon-[tabler--uv-index] w-8 h-8 opacity-60 my-auto"></span>
        <div>
          <h2>Índice UV</h2>
          <p className="flex items-end gap-1 leading-4 text-sm">
            <strong className="text-lilac-150 text-lg font-bold leading-5">
              {Math.round(currentWeatherData.uvIndex)}
            </strong>
          </p>
        </div>
      </div>
      <div className="flex py-3 px-4 bg-lilac-500/60 rounded-md gap-3 max-w-36 max-h-15 w-full h-full">
        <span className="icon-[wpf--rain] w-8 h-8 opacity-60 my-auto"></span>
        <div>
          <h2>Chuva</h2>
          <p className="flex items-end gap-1 leading-4 text-sm">
            <strong className="text-lilac-150 text-lg font-bold leading-5">
              {Math.round(currentWeatherData.precipitationProbability)}
            </strong>{' '}
            %
          </p>
        </div>
      </div>
    </div>
  )
}

export function DailyWeather({ currentWeatherData }: DailyWeatherProps) {
  return (
    <section className="flex font-default font-bold max-w-120 max-h-120 w-full h-full">
      <Image
        src={CloudBackground}
        alt=""
        width="480"
        height="480"
        quality={100}
        className="absolute rounded-xl -z-10"
      />

      <Image
        src={getWeatherIcon(currentWeatherData.weatherCode)}
        alt=""
        width="176"
        height="176"
        className="absolute -mt-14 -ml-14"
      />

      <div className="relative flex flex-col justify-between items-center p-3 shrink flex-wrap w-full">
        <div className="flex justify-end pt-5 pr-5 gap-1 shrink w-full">
          <span className="icon-[material-symbols--pin-drop-rounded] bg-lilac-300 w-5 h-5"></span>
          <p className="text-lilac-200 text-sm">Vitória, ES</p>
        </div>

        <div className="flex gap-1 mb-24 ml-4">
          <span>
            <strong className="text-[5.5rem] text-white leading-[6.625rem]">
              {Math.round(currentWeatherData.averageTemperature)}
            </strong>
            <div className="flex justify-center items-center gap-1 text-xl text-lilac-200">
              <strong className="text-white">
                {Math.round(currentWeatherData.maxTemperature)}°
              </strong>{' '}
              {Math.round(currentWeatherData.minTemperature)}°
            </div>
          </span>
          <p className="mt-4 text-2xl text-lilac-150">°C</p>
        </div>

        <WeatherInfoCard currentWeatherData={currentWeatherData} />
      </div>
    </section>
  )
}
