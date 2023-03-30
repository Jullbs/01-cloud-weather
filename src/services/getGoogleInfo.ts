import axios from 'axios'

interface GetGoogleInfoProps {
  lat: number
  long: number
}

export async function getGoogleInfo({ lat, long }: GetGoogleInfoProps) {
  const data = await axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${process.env.NEXT_PUBLIC_GOOGLEAPI_SECRET_KEY}`,
  )

  const adress = data.data.plus_code.compound_code
  const adressFormated = adress.substr(9, adress.length)

  return adressFormated
}
