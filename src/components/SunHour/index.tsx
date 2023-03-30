import Image from 'next/image'
import SunHourChart from '@/assets/sun-hour-chart.svg'
import moment from 'moment'

interface SunHourProps {
  currentWeatherData: {
    sunrise: string
    sunset: string
  }
}

function getTimeInSeconds(time?: string) {
  if (time) {
    return moment.duration(moment(time).format('LTS')).asSeconds()
  } else {
    return moment.duration(moment().format('LTS')).asSeconds()
  }
}

export function SunHour({ currentWeatherData }: SunHourProps) {
  const sunriseInSeconds = getTimeInSeconds(currentWeatherData.sunrise)
  const sunsetInSeconds = getTimeInSeconds(currentWeatherData.sunset)
  const realTimeInSeconds = getTimeInSeconds(moment().format())
  // const realTimeInSeconds = getTimeInSeconds('2023-03-30T20:44')

  function getHourIcon() {
    if (
      realTimeInSeconds > sunsetInSeconds ||
      realTimeInSeconds < sunriseInSeconds
    ) {
      return (
        <span className="absolute z-[10] bg-cyan-300 icon-[ri--moon-clear-fill] w-[1.5rem] h-[1.5rem] top-1/2 left-1/2 -m-[0.95rem] translate-x-[6.95rem]"></span>
      )
    } else {
      return (
        <span className="absolute bg-yellow-300 icon-[ph--sun-dim-fill] w-[1.5rem] h-[1.5rem] top-1/2 left-1/2 -m-[0.75rem] translate-x-[-6.75rem]"></span>
      )
    }
  }

  function getSunPosition() {
    if (
      realTimeInSeconds > sunsetInSeconds ||
      realTimeInSeconds < sunriseInSeconds
    ) {
      return 0
    } else {
      const oneDegInSeconds = (sunsetInSeconds - sunriseInSeconds) / 180
      const realTimeDegPosition =
        (realTimeInSeconds - sunriseInSeconds) / oneDegInSeconds

      return Math.round(realTimeDegPosition)
    }
  }

  return (
    <section className="flex flex-col gap-6 pt-8 items-center bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl max-w-[17.3125rem] max-h-[15.25rem] w-full h-full">
      <div className="flex gap-2">
        <span className="icon-[mdi--sun-clock] w-6 h-6"></span>
        <h2>Horário do Sol</h2>
      </div>

      <div className="relative h-[6.875rem] mt-4">
        <Image
          src={SunHourChart}
          alt=""
          width="216"
          height="112"
          className="absolute z-[0]"
        />
        <div
          className="relative w-[13.5rem] h-[13.5rem] m-auto"
          style={{ transform: `rotate(${getSunPosition()}deg)` }}
        >
          {getHourIcon()}
        </div>
      </div>
      <strong className="absolute mt-[7.5rem] text-[0.875rem]">
        {moment().format('LT')}
      </strong>

      <div className="w-[15rem] flex justify-between font-normal text-[0.75rem] mt-[-1rem] leading-[0.875rem]">
        <p>{moment(currentWeatherData.sunrise).format('LT')}</p>
        <p>{moment(currentWeatherData.sunset).format('LT')}</p>
      </div>
    </section>
  )
}
