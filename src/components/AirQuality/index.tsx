export function AirQuality() {
  return (
    <section className="flex flex-col justify-between items-center bg-lilac-450 font-default font-bold text-lilac-150 rounded-xl p-4 max-w-[17.3125rem] max-h-[15.25rem] w-full h-full">
      <div className="flex gap-2 mt-4">
        <span className="icon-[bxs--leaf] w-6 h-6"></span>
        <h2 className="text-[1rem]">Qualidade do ar</h2>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-[1.125rem] text-cyan-300">Boa</p>
        <strong className="text-[2.5rem] leading-[3rem]">21</strong>
      </div>
      <div className="flex gap-4">
        <span className="flex flex-col items-center">
          <strong className="text-[0.875rem] text-cyan-300">12.9</strong>
          <p className="text-[0.75rem] font-normal">PM2.5</p>
        </span>
        <span className="flex flex-col items-center">
          <strong className="text-[0.875rem] text-cyan-300">12.9</strong>
          <p className="text-[0.75rem] font-normal">PM10</p>
        </span>
        <span className="flex flex-col items-center">
          <strong className="text-[0.875rem] text-cyan-300">2.1</strong>
          <p className="text-[0.75rem] font-normal">SO₂</p>
        </span>
        <span className="flex flex-col items-center">
          <strong className="text-[0.875rem] text-cyan-300">1.4</strong>
          <p className="text-[0.75rem] font-normal">NO₂</p>
        </span>
        <span className="flex flex-col items-center">
          <strong className="text-[0.875rem] text-cyan-300">21.2</strong>
          <p className="text-[0.75rem] font-normal">O₃</p>
        </span>
        <span className="flex flex-col items-center">
          <strong className="text-[0.875rem] text-cyan-300">0.7</strong>
          <p className="text-[0.75rem] font-normal">CO</p>
        </span>
      </div>
    </section>
  )
}
