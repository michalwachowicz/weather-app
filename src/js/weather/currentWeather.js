import getResponse from '../api';
import RecentCity from '../recentCity';
import Weather from './weather';

class CurrentWeather extends Weather {
  constructor(data) {
    super(data);
    const { main, coord, wind, clouds } = data;
    this.name = data.name;
    this.lon = coord.lon;
    this.lat = coord.lat;
    this.temp = main.temp.toFixed(0);
    this.humidity = main.humidity;
    this.windSpeed = wind.speed;
    this.cloudiness = clouds.all;
  }
}

async function getCurrentWeather(location, units) {
  const response = await getResponse(`weather?q=${location}&units=${units}`);
  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();
  RecentCity.setCity(data.name);
  return new CurrentWeather(data);
}

async function getCurrentWeatherByCoords({ latitude, longitude }, units) {
  const response = await getResponse(
    `weather?lat=${latitude}&lon=${longitude}&units=${units}`,
  );
  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();
  return new CurrentWeather(data);
}

export { getCurrentWeather, getCurrentWeatherByCoords };
