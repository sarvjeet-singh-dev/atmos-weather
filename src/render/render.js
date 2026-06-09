import { fetchWeather } from "../api/api";
import { weatherState } from "../state/weatherState";
import { getElements } from "../dom/dom";
import { navbar } from "../components/navbar/navbar";
import { hero } from "../components/hero/hero";
import { weatherEvents } from "../events/weatherEvents";
import { weatherThemes } from "../utils/weatherTheme";
import { weatherIcons } from "../utils/weatherIcons";

export const components = () => {
    const elements = getElements();
    elements.navbar.innerHTML = navbar();
    elements.hero.innerHTML = hero();
};


export const render  = () => { 
    // Dynamic Background Theme
    const condition = weatherState.weatherData.condition;
    const theme = weatherThemes[condition] || "from-zinc-900 to-black";

    // Dynamic Weather Icon
    const icon = weatherIcons[condition] || "❓";



    const elements = getElements();

    const data = weatherState.weatherData;

    elements.cityName.textContent = weatherState.city; 
    elements.tempDisplay.textContent = `${data.temp !== null ? data.temp : "--"}°`; 
    elements.weatherCondition.textContent =  weatherState.weatherData.condition || "--"; 
    elements.humidity.textContent = `${data.humidity !== null ? data.humidity : "--"}%`; 
    elements.windSpeed.textContent = `${data.windSpeed !== null ? data.windSpeed : "--"} Km/h `; 
    elements.pressure.textContent = `${data.pressure !== null ? data.pressure : "--"}`; 
    elements.visibility.textContent = `${(data.visibility !== null ? (data.visibility)/1000 : "--")} Km`; 


    elements.heroRightCard.className = `bg-gradient-to-br ${theme} rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 flex flex-col gap-8 hover:border-green-500/40 transition-all duration-300 `;
    elements.weatherIcon.textContent = icon;


};