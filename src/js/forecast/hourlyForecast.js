import dayjs from 'dayjs';
import Weather from '../weather/weather';

class HourlyForecast extends Weather {
  constructor(data) {
    super(data);
    this.hour = dayjs.unix(data.dt).format('h A');
    this.temp = data.temp.toFixed(0);
  }
}

export default HourlyForecast;
