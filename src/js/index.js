import 'regenerator-runtime/runtime';
import '../scss/index.scss';
import getForecastWeather from './forecast/forecastWeather';
import getCurrentWeather from './weather/currentWeather';

async function showWeatherInConsole() {
  const currentWeather = await getCurrentWeather('london');
  const forecastWeather = await getForecastWeather(currentWeather);

  console.log(currentWeather);
  console.log(forecastWeather);
}

showWeatherInConsole();
