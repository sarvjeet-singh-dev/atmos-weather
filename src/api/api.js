const apiKey = "64f9b8f57ffe729853da2e125a533570";

export const fetchWeather = async (city) =>  {
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const res = await fetch(url);
        
        if(!res.ok){
            throw new Error("City Not Found");
        };

        const data = await res.json();

        return data;
    
    }catch(error){
        console.error("API Error:", error.message);
        throw error;
    }
};