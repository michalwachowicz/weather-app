import "../scss/index.scss";
import initializeSearchbar from "./components/searchbar";
import updateSectionIcons from "./components/sectionIcons";
import loadWeather from "./domUpdater";
import getCurrentCity from "./geoApi";
import weatherApi from "./weatherApi";

initializeSearchbar(weatherApi.getCurrentUnit());
updateSectionIcons();

(async () => {
  const city = await getCurrentCity();
  loadWeather(city || "London");
})();
