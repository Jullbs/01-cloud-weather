import Image from 'next/image'
import SunHourChart from '@/assets/sun-hour-chart.svg'

export function SunHour() {
  return (
    <section className="flex flex-col gap-6 pt-8 items-center bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl max-w-[17.3125rem] max-h-[15.25rem] w-full h-full">
      <div className="flex gap-2">
        <span className="icon-[mdi--sun-clock] w-6 h-6"></span>
        <h2>Horário do Sol</h2>
      </div>

      <div className="relative h-[6.875rem] mt-4">
        <div className="relative w-[13.5rem] h-[13.5rem] m-auto rotate-[0deg]">
          <span className="absolute bg-yellow-300 w-[0.75rem] h-[0.75rem] rounded-[50%] top-1/2 left-1/2 -m-[0.375rem] translate-x-[-6.75rem]"></span>
        </div>
      </div>
      <strong className="absolute mt-[7.5rem] text-[0.875rem]">16:01</strong>
      <Image
        src={SunHourChart}
        alt=""
        width="216"
        height="112"
        className="absolute mt-16"
      />
      <div className="w-[15rem] flex justify-between font-normal text-[0.75rem] mt-[-1rem] leading-[0.875rem]">
        <p>06:12</p>
        <p>18:52</p>
      </div>
    </section>
  )
}
