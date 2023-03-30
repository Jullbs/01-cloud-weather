import axios from 'axios'

interface GetAirInfoProps {
  lat: number
  long: number
}

export async function getAirInfo({ lat, long }: GetAirInfoProps) {
  const data = await axios.get(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY}`,
  )

  const airDataOrganized = {
    aqi: data.data.list[0].main.aqi,
    components: {
      PM2_5: data.data.list[0].components.pm2_5,
      PM10: data.data.list[0].components.pm10,
      SO2: data.data.list[0].components.so2,
      NO2: data.data.list[0].components.no2,
      O3: data.data.list[0].components.o3,
      CO: data.data.list[0].components.co,
    },
  }

  return airDataOrganized
}
