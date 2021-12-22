export default function getCurrentLocation() {
  if (window.navigator.geolocation) {
    return new Promise((resolve, reject) => {
      window.navigator.geolocation.getCurrentPosition(resolve, reject, {
        timeout: 2000,
      });
    });
  }
  return Promise.reject(new Error("Couldn't load current location!"));
}
