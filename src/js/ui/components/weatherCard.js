import cleanContent from '../contentCleaner';
import createWeatherIcon from './icon';

// type => 'hourly' or 'daily'
function createWeatherCard(type = 'hourly') {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('card--weather');

  if (type === 'hourly' || type === 'daily') {
    card.classList.add(`card--weather--${type}`);
  }

  return card;
}

function createCardTitle(title) {
  const h5 = document.createElement('h5');
  h5.className = 'card--weather__title';
  h5.textContent = title;
  return h5;
}

function createCardTemperature(temp, bold = false) {
  const temperature = document.createElement('div');
  temperature.className = `card--weather__temp ${
    bold ? 'card--weather__temp--bold' : ''
  }`;
  temperature.textContent = `${temp}°`;
  return temperature;
}

function createHourlyCard({ hour, temp, icon, description }) {
  const card = createWeatherCard('hourly');
  const title = createCardTitle(hour);
  const weatherIcon = createWeatherIcon({ icon, description });
  const temperature = createCardTemperature(temp);

  card.appendChild(title);
  card.appendChild(weatherIcon);
  card.appendChild(temperature);

  return card;
}

function createDailyCard({ day, minTemp, maxTemp, icon, description }) {
  const card = createWeatherCard('daily');
  const title = createCardTitle(day);
  const weatherIcon = createWeatherIcon({ icon, description });
  const maxTemperature = createCardTemperature(maxTemp, true);
  const minTemperature = createCardTemperature(minTemp);

  card.appendChild(title);
  card.appendChild(weatherIcon);
  card.appendChild(maxTemperature);
  card.appendChild(minTemperature);

  return card;
}

export default function addWeatherCards(forecastWeather) {
  const hourlyForecast = forecastWeather.hourly;
  const hourlyElement = document.querySelector('#hourly');

  cleanContent(hourlyElement);
  hourlyForecast.forEach((weather) => {
    const card = createHourlyCard(weather);
    hourlyElement.appendChild(card);
  });

  const dailyForecast = forecastWeather.daily;
  const dailyElement = document.querySelector('#daily');

  cleanContent(dailyElement);
  dailyForecast.forEach((weather) => {
    const card = createDailyCard(weather);
    dailyElement.appendChild(card);
  });
}
