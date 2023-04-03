import { LocationData } from '@/types'
import axios from 'axios'

export async function getGoogleInfo({ lat, long }: LocationData) {
  try {
    const data = await axios.get('/api/city-state', {
      params: {
        lat,
        long,
      },
    })

    return data.data.adressFormated
  } catch (err) {
    console.log(err)
    return ''
  }
}
