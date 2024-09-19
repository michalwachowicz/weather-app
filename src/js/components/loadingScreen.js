import weatherIcon from "./weatherIcon";

const weatherContent = document.querySelector(".weather-content");
const loadingScreen = document.querySelector(".loading-screen");
const icon = loadingScreen.querySelector(".loading-screen-icon");

let currentIconId = 0;
let intervalId = -1;

const open = () => {
  const icons = Object.values(weatherIcon.getIcons());

  weatherContent.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  intervalId = setInterval(() => {
    icon.innerHTML = icons[currentIconId];
    currentIconId = currentIconId + 1 >= icons.length ? 0 : currentIconId + 1;
  }, 1000);
};

const close = () => {
  weatherContent.classList.remove("hidden");
  loadingScreen.classList.add("hidden");

  clearInterval(intervalId);
};

export default { open, close };
