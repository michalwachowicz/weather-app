import {
  getCurrentWeather,
  getCurrentWeatherByCoords,
} from '../weather/currentWeather';
import getForecastWeather from '../forecast/forecastWeather';
import updateCurrentWeather from './components/currentWeatherUi';
import addWeatherCards from './components/weatherCard';

// units = 'metric' => Celsius, units = 'imperial' => Fahrenheit
async function displayWeather(city, units = 'metric') {
  const currentWeather = await getCurrentWeather(city, units);
  const forecastWeather = await getForecastWeather(currentWeather, units);

  updateCurrentWeather(currentWeather);
  addWeatherCards(forecastWeather);

  // TODO: Hide all components and show weather component
}

// units = 'metric' => Celsius, units = 'imperial' => Fahrenheit
async function displayWeatherByCoords(coords, units = 'metric') {
  const currentWeather = await getCurrentWeatherByCoords(coords, units);
  const forecastWeather = await getForecastWeather(currentWeather, units);

  updateCurrentWeather(currentWeather);
  addWeatherCards(forecastWeather);
}

export { displayWeather, displayWeatherByCoords };
