import getResponse from '../api';
import DailyForecast from './dailyForecast';
import HourlyForecast from './hourlyForecast';

class ForecastWeather {
  constructor({ hourly, daily }) {
    this.hourly = hourly
      .slice(1, 25)
      .map((hourData) => new HourlyForecast(hourData));
    this.daily = daily.map((dayData) => new DailyForecast(dayData));
  }
}

export default async function getForecastWeather(
  { lon, lat },
  units = 'metric',
) {
  const response = await getResponse(
    `onecall?lon=${lon}&lat=${lat}&units=${units}&exclude=current,minutely,alerts`,
  );
  if (!response.ok) throw new Error(response.statusText);

  const data = await response.json();
  return new ForecastWeather(data);
}
