import searchIcon from "../../assets/icons/ui/search.svg";
import loadWeather from "../domUpdater";
import weatherApi from "../weatherApi";

export default function initializeSearchbar(currentUnit) {
  const searchbar = document.querySelector(".searchbar");
  const searchInput = searchbar.querySelector(".searchbar-input");
  const searchBtn = searchbar.querySelector(".btn-search");

  const switchBtn = document.querySelector(".btn-switch");
  const switchBall = switchBtn.querySelector(".switch-ball");

  const switchedClass = "switched";

  if (currentUnit !== "celsius") {
    switchBall.classList.add(switchedClass);
    switchBall.textContent = "°F";
  }

  searchBtn.innerHTML = searchIcon;
  searchbar.addEventListener("submit", (e) => {
    e.preventDefault();

    const { value } = searchInput;

    loadWeather(value);
    searchInput.value = "";
  });

  switchBtn.addEventListener("click", () => {
    let unit;

    if (switchBall.classList.contains(switchedClass)) {
      switchBall.classList.remove(switchedClass);
      switchBall.textContent = "°C";

      unit = "celsius";
    } else {
      switchBall.classList.add(switchedClass);
      switchBall.textContent = "°F";

      unit = "fahrenheit";
    }

    weatherApi.setCurrentUnit(unit);
    loadWeather(weatherApi.getCurrentAddress());
  });
}
