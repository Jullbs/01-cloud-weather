import SunIcon from '@/assets/sun-icon.svg'
import SunBetweenClouds from '@/assets/sun-between-clouds.svg'
import CloudIcon from '@/assets/cloud-icon.svg'
import FogIcon from '@/assets/fog-icon.svg'
import RainCloud from '@/assets/rain-cloud.svg'
import SnowCloud from '@/assets/snow-cloud.svg'
import ThunderCloud from '@/assets/thunder-cloud.svg'

export function getWeatherIcon(weatherCode: number) {
  let icon = CloudIcon

  switch (weatherCode) {
    case 0:
      icon = SunIcon
      break
    case 1:
    case 2:
      icon = SunBetweenClouds
      break
    case 3:
      icon = CloudIcon
      break
    case 45:
    case 48:
      icon = FogIcon
      break
    case 51:
    case 53:
    case 55:
    case 56:
    case 57:
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      icon = RainCloud
      break
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      icon = SnowCloud
      break
    case 95:
    case 96:
    case 99:
      icon = ThunderCloud
      break
  }

  return icon
}
