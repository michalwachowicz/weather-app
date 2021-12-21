export default function createWeatherIcon({ icon, description }) {
  const weatherIcon = new Image();

  weatherIcon.className = 'weather-icon';
  weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  weatherIcon.alt = description;

  return weatherIcon;
}
