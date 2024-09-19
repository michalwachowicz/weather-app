import { format } from "date-fns";

const API_KEY = "QRA5RNJTETY4YPCFFTM6QWMBA";

let currentUnit = localStorage.unit || "celsius";
let currentAddress = "";

const fetchData = async (searchQuery) => {
  const target = searchQuery.trim().replaceAll(" ", "+");
  const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${target}/next7days?unitGroup=metric&key=${API_KEY}&contentType=json`;

  try {
    const response = await fetch(query);
    const data = await response.json();

    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return null;
  }
};

const round = (num) => Math.round(num * 10) / 10;
const toFahrenheit = (temp) => temp * (9 / 5) + 32;
const formatTemperature = (temp, unit) =>
  unit === "celsius" ? round(temp) : round(toFahrenheit(temp));

const getHour = (datetime) => datetime.split(":")[0];
const getMinutes = (datetime) => datetime.split(":")[1];

const getHourlyForecast = ({ currentConditions, days }, unit) => {
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
      temperature: formatTemperature(hour.temp, unit),
    };
  });
};

const getWeeklyForecast = ({ days }, unit) =>
  days.map(({ datetime, tempmin, tempmax, icon }, index) => ({
    day: index === 0 ? "Today" : format(new Date(datetime), "EEEE"),
    tempmin: formatTemperature(tempmin, unit),
    tempmax: formatTemperature(tempmax, unit),
    icon,
  }));

const getCurrentAddress = () => currentAddress;
const setCurrentAddress = (address) => {
  currentAddress = address;
};

const getCurrentUnit = () => currentUnit;
const setCurrentUnit = (unit) => {
  currentUnit = unit;
  localStorage.unit = unit;
};

const getWeather = async (address) => {
  const data = await fetchData(address);
  if (!data) return null;

  const { resolvedAddress } = data;
  const { temp, conditions, humidity, cloudcover, windspeed } =
    data.currentConditions;

  const weekly = getWeeklyForecast(data, currentUnit);
  const hourly = getHourlyForecast(data, currentUnit);

  setCurrentAddress(resolvedAddress);

  return {
    address: resolvedAddress,
    cloudiness: cloudcover,
    temperature: formatTemperature(temp, currentUnit),
    conditions,
    humidity,
    windspeed,
    weekly,
    hourly,
  };
};

export default {
  getCurrentAddress,
  getCurrentUnit,
  setCurrentUnit,
  getWeather,
};
