const weatherContent = document.querySelector(".weather-content");
const errorScreen = document.querySelector(".error-screen");

const open = () => {
  weatherContent.classList.add("hidden");
  errorScreen.classList.remove("hidden");
};

const close = () => {
  weatherContent.classList.remove("hidden");
  errorScreen.classList.add("hidden");
};

export default { open, close };
