export const hero = () => {
    return`
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

      <!-- Button -->
      <div class="flex flex-wrap gap-5">
      
        <a href="https://github.com/sarvjeet-singh-dev/atmos-weather.git" class="cursor-pointer px-6 py-3 rounded-full border border-zinc-700 hover:border-green-500/40 transition-all duration-300 active:scale-95 ">
          GitHub
        </a>

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
    </div>`
};