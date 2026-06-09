import { fetchWeather } from "../api/api";
import { getElements } from "../dom/dom";
import { render } from "../render/render";
import { weatherState } from "../state/weatherState";

export const updateWeatherState = (data) => {
    
    weatherState.city = data.name;
    
    weatherState.weatherData = {
      temp: data.main.temp,
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      pressure: data.main.pressure,
      visibility: data.visibility,
      windSpeed: (data.wind.speed * 3.6).toFixed(2),
    };
};


export const weatherEvents = () => {
    
    const elements = getElements();
    
    elements.searchBtn.addEventListener("click", async ()=>{
        const query = elements.searchInput.value.trim();

        if(!query) return ;

        weatherState.isLoading = true;
        weatherState.error = null;

        try{
            const data = await fetchWeather(query);

            updateWeatherState(data);
            render();

            weatherState.isLoading = false;
            elements.searchInput.value = "";

        }catch(error){
            weatherState.error = error.message;
            alert(error.message);
        }finally{
            weatherState.isLoading = false;
        };

    });

    elements.searchInput.addEventListener("keydown",(e)=>{

        if(e.key === "Enter"){
            elements.searchBtn.click();
        }
    });
};