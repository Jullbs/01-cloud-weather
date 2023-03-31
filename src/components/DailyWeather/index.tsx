import { getWeatherIcon } from '@/util/getWeatherIcon'
import Image from 'next/image'
import CloudBackground from 'public/images/cloud-background.png'

interface CurrentWeatherData {
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

interface WeatherInfoCardProps {
  currentWeatherData: CurrentWeatherData
}

interface DailyWeatherProps {
  currentWeatherData: CurrentWeatherData
  cityState: string | undefined
}

function WeatherInfoCard({ currentWeatherData }: WeatherInfoCardProps) {
  return (
    <div className="flex sm:flex-row flex-wrap sm:flex-nowrap justify-center text-lilac-100 gap-2 font-normal text-xs w-full">
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

export function DailyWeather({
  currentWeatherData,
  cityState,
}: DailyWeatherProps) {
  return (
    <section className="flex font-default font-bold max-w-[30rem] max-h-[30rem] w-full h-full">
      <Image
        src={CloudBackground}
        alt=""
        width="480"
        height="480"
        quality={100}
        className="absolute rounded-xl -z-10 w-[30rem] h-[25rem] sm:w-[30rem] sm:h-[30rem]"
      />

      <Image
        src={getWeatherIcon(currentWeatherData.weatherCode)}
        alt=""
        width="176"
        height="176"
        className="absolute opacity-50 sm:opacity-100 sm:-mt-14 sm:-ml-14"
      />

      <div className="relative flex flex-col gap-6 sm:gap-16 justify-between items-center p-3 shrink flex-wrap w-full">
        <div className="flex justify-end pt-5 pr-5 gap-1 shrink w-full">
          <span className="icon-[material-symbols--pin-drop-rounded] bg-lilac-300 w-5 h-5"></span>
          <p className="text-lilac-200 text-sm">{cityState && cityState}</p>
        </div>

        <div className="flex shrink gap-1 sm:mb-20 ml-4">
          <span className="flex flex-col shrink">
            <strong className="text-[4rem] sm:text-[5.5rem] text-white leading-[6.625rem]">
              {Math.round(currentWeatherData.averageTemperature)}
            </strong>
            <div className="flex justify-center items-center gap-1 text-xl text-lilac-200">
              <strong className="text-white">
                {Math.round(currentWeatherData.maxTemperature)}°
              </strong>{' '}
              {Math.round(currentWeatherData.minTemperature)}°
            </div>
          </span>
          <p className="mt-4 text-[2rem] sm:text-2xl text-lilac-150">°C</p>
        </div>

        <WeatherInfoCard currentWeatherData={currentWeatherData} />
      </div>
    </section>
  )
}
