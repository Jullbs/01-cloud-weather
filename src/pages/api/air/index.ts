import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const { lat, long } = req.query

  const data = await axios.get(
    `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.OPENWEATHER_API_SECRET_KEY}`,
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

  return res.status(200).json({ airDataOrganized })
}
