class Weather {
  constructor(data) {
    const { weather } = data;
    this.main = weather[0].main;
    this.icon = weather[0].icon;
  }
}

export default Weather;
