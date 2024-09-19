import "../scss/index.scss";
import loadingScreen from "./components/loadingScreen";
import initializeSearchbar from "./components/searchbar";
import updateSectionIcons from "./components/sectionIcons";
import loadWeather from "./domUpdater";
import getCurrentCity from "./geoApi";
import weatherApi from "./weatherApi";

initializeSearchbar(weatherApi.getCurrentUnit());
updateSectionIcons();

(async () => {
  loadingScreen.open();

  const city = await getCurrentCity();
  loadWeather(city || "London");
})();
