import updateInfoSection from "./sections/infoSection";
import updateAdditionalSection from "./sections/additionalSection";
import updateHourlySection from "./sections/hourlySection";
import updateWeeklySection from "./sections/weeklySection";
import weatherApi from "./weatherApi";
import loadingScreen from "./components/loadingScreen";

const updateDOM = (data) => {
  loadingScreen.close();

  if (!data) {
    // TODO: Show error message
    return;
  }

  updateInfoSection(data);
  updateAdditionalSection(data);
  updateHourlySection(data);
  updateWeeklySection(data);
};

export default async function loadWeather(address) {
  loadingScreen.open();

  const weather = await weatherApi.getWeather(
    address,
    weatherApi.getCurrentUnit()
  );

  updateDOM(weather);
}
