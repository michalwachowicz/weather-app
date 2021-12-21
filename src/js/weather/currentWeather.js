import Weather from './weather';

class CurrentWeather extends Weather {
  constructor(data) {
    super(data);
    const { main, coord, wind, clouds } = data;
    this.name = data.name;
    this.lon = coord.lon;
    this.lat = coord.lat;
    this.temp = main.temp;
    this.humidity = main.humidity;
    this.windSpeed = wind.speed;
    this.cloudiness = clouds.all;
  }
}

export default CurrentWeather;
