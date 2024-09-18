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

const getWeather = async (address) => {
  const data = await fetchData(address);
  if (!data) return null;

  const conditions = data.currentConditions;

  /*
  TODO:
  - Hourly forecast (with sunset/sunrise)
  - Weekly forecast
  */

  return {
    address: data.resolvedAddress,
    temperature: conditions.temp,
    conditions: conditions.conditions,
    humidity: conditions.humidity,
    cloudiness: conditions.cloudcover,
    windspeed: conditions.windspeed,
  };
};

export default getWeather;
