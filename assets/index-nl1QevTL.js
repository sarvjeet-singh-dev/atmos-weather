(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`64f9b8f57ffe729853da2e125a533570`,t=async t=>{try{let n=`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=${e}&units=metric`,r=await fetch(n);if(!r.ok)throw Error(`City Not Found`);return await r.json()}catch(e){throw console.error(`API Error:`,e.message),e}},n=()=>({navbar:document.getElementById(`navbar`),hero:document.getElementById(`hero`),heroRightCard:document.getElementById(`hero-right-card`),weatherIcon:document.getElementById(`weather-icon`),cityName:document.getElementById(`city-name`),tempDisplay:document.getElementById(`temp-display`),weatherCondition:document.getElementById(`weather-condition`),humidity:document.getElementById(`humidity`),windSpeed:document.getElementById(`wind-speed`),pressure:document.getElementById(`pressure`),visibility:document.getElementById(`visibility`),searchBtn:document.getElementById(`search-btn`),searchInput:document.getElementById(`search-input`)}),r={city:`Mohali`,weatherData:{temp:null,condition:``,humidity:null,pressure:null,visibility:null,windSpeed:null},forecastData:[],isLoading:!1,error:null},i=()=>`
      <!-- Left -->
  <div class="flex items-center gap-3">

    <div class=" w-10 h-10 rounded-xl bg-green-500/20 flex justify-center items-center ">
      <i class="ri-cloudy-fill text-green-500 text-xl"></i>
    </div>

    <div>
      <p class="text-lg md:text-xl font-semibold">
        Atmos
      </p>

      <p class="text-xs text-zinc-500">
        Weather Dashboard
      </p>
    </div>

  </div>

  <!-- Right -->
  <div class="flex items-center gap-4">

    <!-- GitHub -->
    <button class=" px-4 py-2 rounded-full bg-green-500/40 hover:bg-green-800 transition-all duration-300 active:scale-95 text-sm ">
      GitHub
    </button>

  </div>
  `,a=()=>`
    <!-- Left Content -->
    <div class="flex flex-col gap-6">

      <p class="text-sm md:text-base text-green-500">
        Frontend Weather Dashboard
      </p>

      <div>
        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          Real-Time Weather
        </h1>

        <h1 class="text-5xl md:text-7xl font-bold leading-tight">
          Monitoring System
        </h1>
      </div>

      <p class="text-sm md:text-lg text-zinc-400 leading-relaxed max-w-2xl">
        State-driven weather dashboard with dynamic rendering, API integration, and responsive frontend architecture.
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap gap-5">

        <button class=" px-6 py-3 rounded-full bg-green-500/40 hover:bg-green-800 transition-all duration-300 active:scale-95 ">
          Search Weather
        </button>

        <button class=" px-6 py-3 rounded-full border border-zinc-700 hover:border-green-500/40 transition-all duration-300 active:scale-95 ">
          GitHub
        </button>

      </div>

    </div>

    <!-- Right Weather Card -->
    <div id="hero-right-card" class="rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 flex flex-col gap-8 hover:border-green-500/40 transition-all duration-300 ">

      <!-- Top -->
    <div class="flex flex-col gap-3 justify-between items-center">
        <!-- Search Bar -->

        <div class="flex flex-col md:flex-row gap-5 w-full">

        <input id="search-input" type="text" placeholder="Search city..." class=" flex-1 px-5 py-4 rounded-2xl border border-zinc-800 bg-zinc-900/40 outline-none focus:border-green-500/40 transition-all duration-300 " >

        <button id="search-btn" class=" px-6 py-4 rounded-2xl bg-green-500/40 hover:bg-green-800 transition-all duration-300 cursor-pointer active:scale-95 ">
            Search
        </button>

        </div>

        <div class="w-full rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 flex flex-col gap-2 ">

            <div class="flex justify-between items-center">

                <div>
                    <p class="text-sm text-zinc-400">
                        Current Location
                    </p>

                    <p id="city-name" class="text-2xl font-semibold">
                        Mohali
                    </p>
                </div>

                <span id="weather-icon" class="text-5xl">

            </div>

            <!-- Temperature -->
            <div class="flex flex-col gap-2">

                <h2 id="temp-display" class="text-7xl font-bold">
                --°
                </h2>

                <p id="weather-condition" class="text-xl text-zinc-400">
                
                </p>

            </div>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-5">

                <div class=" rounded-2xl border border-zinc-800 p-4 ">
                    <p class="text-sm text-zinc-400">
                        Humidity
                    </p>

                    <p id="humidity" class="text-2xl font-semibold mt-2">
                        --%
                    </p>
                </div>

                <div class=" rounded-2xl border border-zinc-800 p-4 ">
                    <p class="text-sm text-zinc-400">
                        Wind
                    </p>

                    <p id="wind-speed" class="text-2xl font-semibold mt-2">
                        -- Km/h
                    </p>
                </div>

                <div class=" rounded-2xl border border-zinc-800 p-4 ">
                    <p class="text-sm text-zinc-400">
                        Pressure
                    </p>

                    <p id="pressure" class="text-2xl font-semibold mt-2">
                        --
                    </p>
                </div>

                <div class=" rounded-2xl border border-zinc-800 p-4 ">
                    <p class="text-sm text-zinc-400">
                        visibility
                    </p>

                    <p id="visibility" class="text-2xl font-semibold mt-2">
                        --
                    </p>
                </div>
            </div>

        </div>
    </div>
    </div>`,o={Clear:`from-yellow-500/20 to-orange-500/10`,Clouds:`from-slate-500/20 to-zinc-800`,Rain:`from-blue-900/40 to-slate-950`,Thunderstorm:`from-purple-900/40 to-black`,Snow:`from-cyan-100/10 to-slate-800`,Mist:`from-zinc-700 to-zinc-900`},s={Clear:`☀️`,Clouds:`☁️`,Rain:`🌧️`,Thunderstorm:`⛈️`,Snow:`❄️`,Mist:`🌫️`},c=()=>{let e=n();e.navbar.innerHTML=i(),e.hero.innerHTML=a()},l=()=>{let e=r.weatherData.condition,t=o[e]||`from-zinc-900 to-black`,i=s[e]||`❓`,a=n(),c=r.weatherData;a.cityName.textContent=r.city,a.tempDisplay.textContent=`${c.temp===null?`--`:c.temp}°`,a.weatherCondition.textContent=r.weatherData.condition||`--`,a.humidity.textContent=`${c.humidity===null?`--`:c.humidity}%`,a.windSpeed.textContent=`${c.windSpeed===null?`--`:c.windSpeed} Km/h `,a.pressure.textContent=`${c.pressure===null?`--`:c.pressure}`,a.visibility.textContent=`${c.visibility===null?`--`:c.visibility/1e3} Km`,a.heroRightCard.className=`bg-gradient-to-br ${t} rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-md p-8 flex flex-col gap-8 hover:border-green-500/40 transition-all duration-300 `,a.weatherIcon.textContent=i},u=e=>{r.city=e.name,r.weatherData={temp:e.main.temp,condition:e.weather[0].main,humidity:e.main.humidity,pressure:e.main.pressure,visibility:e.visibility,windSpeed:(e.wind.speed*3.6).toFixed(2)}},d=()=>{let e=n();e.searchBtn.addEventListener(`click`,async()=>{let n=e.searchInput.value.trim();if(n){r.isLoading=!0,r.error=null;try{u(await t(n)),l(),r.isLoading=!1,e.searchInput.value=``}catch(e){r.error=e.message,alert(e.message)}finally{r.isLoading=!1}}}),e.searchInput.addEventListener(`keydown`,t=>{t.key===`Enter`&&e.searchBtn.click()})};async function f(){c(),d();let e=await t(r.city);r.weatherData={temp:e.main.temp,condition:e.weather[0].main,humidity:e.main.humidity,pressure:e.main.pressure,visibility:e.visibility,windSpeed:e.wind.speed*3.6},l()}f();