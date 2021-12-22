import {
  getCurrentWeather,
  getCurrentWeatherByCoords,
} from '../weather/currentWeather';
import getForecastWeather from '../forecast/forecastWeather';
import updateCurrentWeather from './components/currentWeatherUi';
import addWeatherCards from './components/weatherCard';
import hideSecions from './sectionsHider';
import displayError from './components/error';
import displayLoadingScreen from './components/loadingScreen';
import getCurrentLocation from '../locationService';
import RecentCity from '../recentCity';

const weatherComponent = document.querySelector('.weather-info');

function updateWeather(currentWeather, forecastWeather) {
  updateCurrentWeather(currentWeather);
  addWeatherCards(forecastWeather);

  hideSecions();
  weatherComponent.classList.remove('hidden');
}

// units = 'metric' => Celsius, units = 'imperial' => Fahrenheit
async function displayWeather(city, units = 'metric') {
  displayLoadingScreen();

  try {
    const currentWeather = await getCurrentWeather(city, units);
    const forecastWeather = await getForecastWeather(currentWeather, units);

    updateWeather(currentWeather, forecastWeather);
  } catch (error) {
    displayError(error);
  }
}

// units = 'metric' => Celsius, units = 'imperial' => Fahrenheit
async function displayWeatherByCoords(coords, units = 'metric') {
  displayLoadingScreen();

  try {
    const currentWeather = await getCurrentWeatherByCoords(coords, units);
    const forecastWeather = await getForecastWeather(currentWeather, units);

    updateWeather(currentWeather, forecastWeather);
  } catch (error) {
    displayError(error);
  }
}

async function displayCurrentLocationWeather() {
  displayLoadingScreen();

  try {
    const response = await getCurrentLocation();
    displayWeatherByCoords(response.coords, localStorage.units);
  } catch {
    displayWeather('London', localStorage.units);
  }
}

async function displayRecentCityWeather() {
  if (RecentCity.getCity()) {
    displayWeather(RecentCity.getCity(), localStorage.units);
  } else {
    displayCurrentLocationWeather();
  }
}

export {
  displayWeather,
  displayCurrentLocationWeather,
  displayRecentCityWeather,
};
