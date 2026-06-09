import { fetchWeather } from "./api/api";
import { weatherEvents } from "./events/weatherEvents";
import { components, render } from "./render/render";
import { weatherState } from "./state/weatherState";

async function init(){
   components();
   
   weatherEvents();
   const data = await fetchWeather(weatherState.city);

   weatherState.weatherData = {
      temp: data.main.temp,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility,
      windSpeed: data.wind.speed * 3.6
   };

   render();
};

init();