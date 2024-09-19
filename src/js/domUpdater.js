import updateInfoSection from "./sections/infoSection";
import updateAdditionalSection from "./sections/additionalSection";
import updateHourlySection from "./sections/hourlySection";
import updateWeeklySection from "./sections/weeklySection";
import weatherApi from "./weatherApi";

const updateDOM = (data) => {
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
  // TODO: Add loading screen

  const weather = await weatherApi.getWeather(
    address,
    weatherApi.getCurrentUnit()
  );

  updateDOM(weather);
}
