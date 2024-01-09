import React, { useEffect, useState } from 'react';
import axios from 'axios'; // gör det enklare att fetcha och hantera async

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=`

      );
      setWeatherData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='weather'>
      {weatherData ? (
        <>
          <h2>{weatherData.name}</h2>
          <p>{weatherData.main.temp}°C</p>
          <p>{weatherData.weather[0].description}</p>
        </>
      ) : (
        <p>Laddas...</p>
      )}
    </div>
  )
}

export default Weather;