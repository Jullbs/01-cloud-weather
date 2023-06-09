import { AirData } from '@/types'

interface AirQualityProps {
  airData: AirData
}

export function AirQuality({ airData }: AirQualityProps) {
  function getAirQuality() {
    switch (airData.aqi) {
      case 1:
        return 'Excelente'
      case 2:
        return 'Boa'
      case 3:
        return 'Moderada'
      case 4:
        return 'Ruim'
      case 5:
        return 'Muito ruim'
      default:
        return 'Desconhecido'
    }
  }

  return (
    <section className="flex flex-col gap-7 justify-between items-center bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl p-4 max-w-[17.3125rem] max-h-[15.25rem] w-full h-full">
      <div className="flex gap-2 mt-4">
        <span className="icon-[bxs--leaf] w-6 h-6"></span>
        <h2 className="text-[1rem]">Qualidade do ar</h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[1.125rem] text-cyan-300">{getAirQuality()}</p>
        <strong className="text-[2.5rem] leading-[3rem]">{airData.aqi}</strong>
      </div>
      <ul className="flex gap-3 max-w-[17.3125rem]">
        {Object.entries(airData.components).map(([key, value], i) => (
          <li className="flex flex-col items-center" key={i}>
            <strong className="text-[0.75rem] text-cyan-300">{value}</strong>
            <p className="text-[0.75rem] font-normal">{key}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
