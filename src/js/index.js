import "../scss/index.scss";
import initializeSearchbar from "./components/searchbar";
import updateSectionIcons from "./components/sectionIcons";
import loadWeather from "./domUpdater";
import weatherApi from "./weatherApi";

initializeSearchbar(weatherApi.getCurrentUnit());
updateSectionIcons();

loadWeather("London");
