export const navbar = () => {
    return `
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
    <a href="https://github.com/sarvjeet-singh-dev/atmos-weather.git" class=" px-4 py-2 rounded-full bg-green-500/40 cursor-pointer hover:bg-green-800 transition-all duration-300 active:scale-95 text-sm ">
      GitHub
    </a>

  </div>
  `
}