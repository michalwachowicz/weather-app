import dayjs from 'dayjs';
import Weather from '../weather/weather';

class DailyForecast extends Weather {
  constructor(data) {
    super(data);
    const { dt, temp } = data;
    this.day = dayjs.unix(dt).format('dddd');
    this.minTemp = temp.min;
    this.maxTemp = temp.max;
  }
}

export default DailyForecast;
