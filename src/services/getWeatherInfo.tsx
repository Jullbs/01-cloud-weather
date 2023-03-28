import axios from 'axios'

interface GetWeatherInfoProps {
  lat: number
  long: number
}

export async function getWeatherInfo({ lat, long }: GetWeatherInfoProps) {
  const data = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode,uv_index_max,precipitation_probability_mean,sunrise,sunset`,
    {
      params: {
        timezone: 'auto',
      },
    },
  )

  // The array starts in the current day so index 0 will be today and so on for the week
  const weatherDataOrganized = {
    currentWeather: {
      averageTemperature: data.data.current_weather.temperature,
      maxTemperature: data.data.daily.temperature_2m_max[0],
      minTemperature: data.data.daily.temperature_2m_min[0],
      weatherCode: data.data.current_weather.weathercode,
      windSpeed: data.data.current_weather.windspeed,
      uvIndex: data.data.daily.uv_index_max[0],
      precipitationProbability:
        data.data.daily.precipitation_probability_mean[0],
      sunrise: data.data.daily.sunrise[0],
      sunset: data.data.daily.sunset[0],
    },
    weekData: {
      maxTemperatures: data.data.daily.temperature_2m_max,
      minTemperatures: data.data.daily.temperature_2m_min,
      weatherCodes: data.data.daily.weathercode,
    },
  }

  return weatherDataOrganized
}
