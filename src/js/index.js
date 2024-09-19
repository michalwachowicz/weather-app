import "../scss/index.scss";
import initializeSearchbar from "./components/searchbar";
import updateSectionIcons from "./components/sectionIcons";
import loadWeather from "./domUpdater";

initializeSearchbar();
updateSectionIcons();

loadWeather("London");
