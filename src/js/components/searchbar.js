import searchIcon from "../../assets/icons/ui/search.svg";

export default function initializeSearchbar() {
  const searchbar = document.querySelector(".searchbar");
  const searchInput = searchbar.querySelector(".searchbar-input");
  const searchBtn = searchbar.querySelector(".btn-search");

  const switchBtn = document.querySelector(".btn-switch");
  const switchBall = switchBtn.querySelector(".switch-ball");

  searchBtn.innerHTML = searchIcon;
  searchbar.addEventListener("submit", (e) => {
    e.preventDefault();

    const { value } = searchInput;

    // TODO: Show current weather
    console.log(value);
    searchInput.value = "";
  });

  switchBtn.addEventListener("click", () => {
    const switchedClass = "switched";
    // TODO: Update current weather values

    if (switchBall.classList.contains(switchedClass)) {
      switchBall.classList.remove(switchedClass);
      switchBall.textContent = "°C";
    } else {
      switchBall.classList.add(switchedClass);
      switchBall.textContent = "°F";
    }
  });
}
