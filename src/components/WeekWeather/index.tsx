import Image from 'next/image'
import CloudIcon from '@/assets/cloud-icon.svg'
import SunIcon from '@/assets/sun-icon.svg'
import RainCloud from '@/assets/rain-cloud.svg'
import ThunderCloud from '@/assets/thunder-cloud.svg'
import SunBetweenClouds from '@/assets/sun-between-clouds.svg'

export function WeekWeather() {
  return (
    <div className="flex gap-3 bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl p-10 max-w-[36.125rem] max-h-[13.25rem] w-full h-full">
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <p className="text-[0.8125rem]">Amanhã</p>
        <Image src={CloudIcon} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <p className="text-[0.8125rem]">Sexta-Feira</p>
        <Image src={SunIcon} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <p className="text-[0.8125rem]">Sábado</p>
        <Image src={RainCloud} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <p className="text-[0.8125rem]">Domingo</p>
        <Image src={ThunderCloud} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
      <span className="flex flex-col justify-between items-center max-w-[5.625rem] w-full">
        <p className="text-[0.8125rem]">Segunda-Feira</p>
        <Image src={SunBetweenClouds} alt="" width="64" height="64" />
        <p className="flex gap-1 text-lilac-200">
          <strong className="text-white">21° </strong>16°
        </p>
      </span>
    </div>
  )
}
