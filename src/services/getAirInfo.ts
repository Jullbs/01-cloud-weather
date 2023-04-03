import { LocationData } from '@/types'
import axios from 'axios'

export async function getAirInfo({ lat, long }: LocationData) {
  try {
    const data = await axios.get('/api/air', {
      params: {
        lat,
        long,
      },
    })

    return data.data.airDataOrganized
  } catch (err) {
    console.log(err)
    return ''
  }
}
