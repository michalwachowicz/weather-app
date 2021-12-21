import 'regenerator-runtime/runtime';
import '../scss/index.scss';
import getForecastWeather from './forecast/forecastWeather';
import addWeatherCards from './ui/components/weatherCard';
import getCurrentWeather from './weather/currentWeather';
import updateCurrentWeather from './ui/components/currentWeatherUi';

async function showWeatherInConsole() {
  const currentWeather = await getCurrentWeather('london');
  const forecastWeather = await getForecastWeather(currentWeather);

  updateCurrentWeather(currentWeather);
  addWeatherCards(forecastWeather);
}

showWeatherInConsole();
