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

  // TODO: Hourly forecast (with sunset/sunrise)

  return {
    address: data.resolvedAddress,
    cloudiness: cloudcover,
    temperature: temp,
    conditions,
    humidity,
    windspeed,
    weekly,
  };
};

export default getWeather;
