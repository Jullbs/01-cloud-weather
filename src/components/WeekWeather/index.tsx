import Image from 'next/image'
import { getWeatherIcon } from '@/util/getWeatherIcon'
import moment from 'moment'
import 'moment/locale/pt-BR'

interface WeekWeatherProps {
  weekData: {
    maxTemperatures: number[]
    minTemperatures: number[]
    weatherCodes: number[]
  }
}

export function WeekWeather({ weekData }: WeekWeatherProps) {
  const weekDaysContent = []

  for (let i = 1; i < 7; i++) {
    weekDaysContent.push(
      <span
        className="flex flex-col justify-between items-center max-w-[5.625rem] w-full"
        key={i}
      >
        <h2 className="text-[0.8125rem] capitalize">
          {moment().locale('pt-BR').add(i, 'days').format('dddd')}
        </h2>
        <Image
          src={getWeatherIcon(weekData.weatherCodes[i])}
          alt=""
          width="64"
          height="64"
        />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">
            {Math.round(weekData.maxTemperatures[i])}°{' '}
          </strong>
          {Math.round(weekData.minTemperatures[i])}°
        </p>
      </span>,
    )
  }

  return (
    <section className="flex flex-row flex-wrap sm:flex-nowrap bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl px-8 py-10 max-w-[36.125rem] sm:max-h-[13.25rem] w-full h-full">
      {weekDaysContent}
    </section>
  )
}
