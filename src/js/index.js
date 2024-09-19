import "../scss/index.scss";
import initializeSearchbar from "./components/searchbar";
import updateSectionIcons from "./components/sectionIcons";
import domUpdater from "./domUpdater";
import weatherApi from "./weatherApi";
import preloadFonts from "./fontPreloader";

if (process.env.NODE_ENV === "production") {
  preloadFonts();
}

initializeSearchbar(weatherApi.getCurrentUnit());
updateSectionIcons();

domUpdater.loadCurrentLocationWeather();
