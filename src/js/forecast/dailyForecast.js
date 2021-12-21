import dayjs from 'dayjs';
import Weather from '../weather/weather';

class DailyForecast extends Weather {
  constructor(data) {
    super(data);
    const { dt, temp } = data;
    this.day = dayjs.unix(dt).format('dddd');
    this.minTemp = temp.min.toFixed(0);
    this.maxTemp = temp.max.toFixed(0);
  }
}

export default DailyForecast;
