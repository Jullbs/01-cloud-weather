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
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.GOOGLE_API_SECRET_KEY}`,
    {
      params: {
        language: 'pt-BR',
      },
    },
  )

  const adress = data.data.plus_code.compound_code
  const adressFormated = adress.substr(9, adress.length)

  return res.status(200).json({ adressFormated })
}
