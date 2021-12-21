export default function updateCurrentWeather(currentWeather) {
  const cityElement = document.querySelector('.weather-info__today__city');
  const tempElement = document.querySelector('.weather-info__today__temp');
  const descElement = document.querySelector('.weather-info__today__desc');

  if (cityElement && tempElement && descElement) {
    cityElement.textContent = currentWeather.name;
    tempElement.textContent = `${currentWeather.temp}°`;
    descElement.textContent = currentWeather.main;
  }

  const humidityElement = document.querySelector('#humidity');
  const windSpeedElement = document.querySelector('#wind');
  const cloudinessElement = document.querySelector('#cloudiness');

  if (humidityElement && windSpeedElement && cloudinessElement) {
    humidityElement.textContent = `${currentWeather.humidity}%`;
    cloudinessElement.textContent = `${currentWeather.cloudiness}%`;
    windSpeedElement.textContent = `${currentWeather.windSpeed} m/s`;
  }
}
