import { format } from "date-fns";

const API_KEY = "QRA5RNJTETY4YPCFFTM6QWMBA";

const fetchData = async (searchQuery) => {
  const target = searchQuery.trim().replaceAll(" ", "+");
  const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${target}/next7days?unitGroup=metric&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(query);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getHour = (datetime) => datetime.split(":")[0];
const getMinutes = (datetime) => datetime.split(":")[1];

const getHourlyForecast = ({ currentConditions, days }) => {
  const { datetime, sunrise, sunset } = currentConditions;

  const currentHour = parseInt(getHour(datetime), 10);
  const sunriseHour = parseInt(getHour(sunrise), 10);
  const sunsetHour = parseInt(getHour(sunset), 10);

  let index = currentHour;
  let sunriseAdded = false;
  let sunsetAdded = false;

  return new Array(27).fill("").map((_, i) => {
    const currentDay = index > 23 ? 1 : 0;
    const currentIndex = index % 24;
    const hour = days[currentDay].hours[currentIndex];

    if (!sunriseAdded && sunriseHour === currentIndex - 1) {
      sunriseAdded = true;
      return {
        hour: `${getHour(sunrise)}:${getMinutes(sunrise)}`,
        icon: "clear-day",
        temperature: "Sunrise",
      };
    }

    if (!sunsetAdded && sunsetHour === currentIndex - 1) {
      sunsetAdded = true;
      return {
        hour: `${getHour(sunset)}:${getMinutes(sunset)}`,
        icon: "clear-night",
        temperature: "Sunset",
      };
    }

    index += 1;

    return {
      hour: i === 0 ? "Now" : hour.datetime.split(":")[0],
      icon: hour.icon,
      temperature: hour.temp,
    };
  });
};

const getWeeklyForecast = ({ days }) =>
  days.map(({ datetime, tempmin, tempmax, icon }, index) => ({
    day: index === 0 ? "Today" : format(new Date(datetime), "EEEE"),
    tempmin,
    tempmax,
    icon,
  }));

const getWeather = async (address) => {
  const data = await fetchData(address);
  if (!data) return null;

  const { temp, conditions, humidity, cloudcover, windspeed } =
    data.currentConditions;
  const weekly = getWeeklyForecast(data);
  const hourly = getHourlyForecast(data);

  return {
    address: data.resolvedAddress,
    cloudiness: cloudcover,
    temperature: temp,
    conditions,
    humidity,
    windspeed,
    weekly,
    hourly,
  };
};

export default getWeather;
