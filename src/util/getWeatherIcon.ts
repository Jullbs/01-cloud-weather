import SunIcon from '@/assets/sun-icon.svg'
import SunBetweenClouds from '@/assets/sun-between-clouds.svg'
import CloudIcon from '@/assets/cloud-icon.svg'
import FogIcon from '@/assets/fog-icon.svg'
import RainCloud from '@/assets/rain-cloud.svg'
import SnowCloud from '@/assets/snow-cloud.svg'
import ThunderCloud from '@/assets/thunder-cloud.svg'

export function getWeatherIcon(weatherCode: number) {
  switch (weatherCode) {
    case 0:
      return SunIcon
    case 1:
    case 2:
      return SunBetweenClouds
    case 3:
      return CloudIcon
    case 45:
    case 48:
      return FogIcon
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
      return RainCloud
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return SnowCloud
    case 95:
    case 96:
    case 99:
      return ThunderCloud
    default:
      return CloudIcon
  }
}
