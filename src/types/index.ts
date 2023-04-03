export interface LocationData {
  lat: number
  long: number
}

export interface CurrentWeatherData {
  averageTemperature: number
  maxTemperature: number
  minTemperature: number
  weatherCode: number
  windSpeed: number
  uvIndex: number
  precipitationProbability: number
  sunrise: string
  sunset: string
}

export interface WeekWeatherData {
  maxTemperatures: number[]
  minTemperatures: number[]
  weatherCodes: number[]
}

export interface WeatherData {
  currentWeather: CurrentWeatherData
  weekWeather: WeekWeatherData
}

export interface AirData {
  aqi: number
  components: {
    PM2_5: number
    PM10: number
    SO2: number
    NO2: number
    O3: number
    CO: number
  }
}
