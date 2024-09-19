async function getLocation() {
  if (navigator.geolocation) {
    try {
      const location = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return location;
    } catch (error) {
      return null;
    }
  }
  return null;
}

export default async function getCurrentCity() {
  const location = await getLocation();
  if (!location) return null;

  const { coords } = location;
  const { latitude, longitude } = coords;

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await response.json();

    return data.address.city;
  } catch (error) {
    return null;
  }
}
