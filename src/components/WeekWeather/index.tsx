import Image from 'next/image'
import CloudIcon from '@/assets/cloud-icon.svg'
import SunIcon from '@/assets/sun-icon.svg'
import RainCloud from '@/assets/rain-cloud.svg'
import ThunderCloud from '@/assets/thunder-cloud.svg'
import SunBetweenClouds from '@/assets/sun-between-clouds.svg'

export function WeekWeather() {
  return (
    <section className="flex gap-3 bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl p-10 max-w-[36.125rem] max-h-[13.25rem] w-full h-full">
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <h2 className="text-[0.8125rem]">Amanhã</h2>
        <Image src={CloudIcon} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <h2 className="text-[0.8125rem]">Sexta-Feira</h2>
        <Image src={SunIcon} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <h2 className="text-[0.8125rem]">Sábado</h2>
        <Image src={RainCloud} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <h2 className="text-[0.8125rem]">Domingo</h2>
        <Image src={ThunderCloud} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <h2 className="text-[0.8125rem]">Segunda-Feira</h2>
        <Image src={SunBetweenClouds} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
    </section>
  )
}
