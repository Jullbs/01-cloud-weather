# 🌥️ Cloud Weather

### ☀️ What?
It’s a web application that based on your location displays the weather of the week, the air quality, the sunrise and sunset hours.  
The goal was to use some of the most current tools, so this project was developed using:
- NextJS
- ReactJS
- Typescript
- Tailwind

### 🌧️ How?
It uses geolocation to get the current latitude and longitude of the user. After that with axios library the api calls are made to:
1. Open-Meteo: to get the week weather data.
2. Open Weather: to get the air quality data.
3. Google Geocoding: to get city and state of the user.  

It was also used the NextJS internal api to help with the security of the keys. For the date formating, hour formating and to get the week days it was used date-fns.

### 🌩️ Deploy?
     npm run dev

### 🌙 Who?
This project was made by me Juliana Daroz (https://www.linkedin.com/in/julianadaroz/) based on a figma design made by Rocketseat: https://www.figma.com/community/file/1215291914714743267/%23boraCodar---Desafio-10.
