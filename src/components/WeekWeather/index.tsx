import Image from 'next/image'
import { getWeatherIcon } from '@/util/getWeatherIcon'
import add from 'date-fns/add'
import format from 'date-fns/format'
import { ptBR } from 'date-fns/locale'
import { WeekWeatherData } from '@/types'

interface WeekWeatherProps {
  weekWeather: WeekWeatherData
}

export function WeekWeather({ weekWeather }: WeekWeatherProps) {
  const weekDaysContent = []

  function getWeekDays(i: number) {
    return format(
      add(new Date(), {
        days: i,
      }),
      'EEEE',
      {
        locale: ptBR,
      },
    )
  }

  for (let i = 1; i < 7; i++) {
    weekDaysContent.push(
      <span
        className="flex flex-col justify-between items-center max-w-[5.625rem] w-full"
        key={i}
      >
        <h2 className="text-[0.8125rem] capitalize">{getWeekDays(i)}</h2>
        <Image
          src={getWeatherIcon(weekWeather.weatherCodes[i])}
          alt=""
          width="64"
          height="64"
        />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">
            {Math.round(weekWeather.maxTemperatures[i])}°{' '}
          </strong>
          {Math.round(weekWeather.minTemperatures[i])}°
        </p>
      </span>,
    )
  }

  return (
    <section className="flex flex-row flex-wrap sm:flex-nowrap justify-center bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl px-8 py-10 max-w-[36.125rem] sm:max-h-[13.25rem] w-full h-full">
      {weekDaysContent}
    </section>
  )
}
