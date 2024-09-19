import "../scss/index.scss";
import initializeSearchbar from "./components/searchbar";
import updateSectionIcons from "./components/sectionIcons";
import updateDOM from "./domUpdater";
import getWeather from "./weatherApi";

initializeSearchbar();
updateSectionIcons();

(async () => {
  const weather = await getWeather("London");
  updateDOM(weather);
})();
