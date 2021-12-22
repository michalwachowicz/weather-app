import 'regenerator-runtime/runtime';
import '../scss/index.scss';
import getCurrentLocation from './locationService';
import displayLoadingScreen from './ui/components/loadingScreen';
import { displayWeather, displayWeatherByCoords } from './ui/weatherDisplayer';

(async () => {
  displayLoadingScreen();
  try {
    const response = await getCurrentLocation();
    displayWeatherByCoords(response.coords);
  } catch {
    displayWeather('London');
  }
})();
