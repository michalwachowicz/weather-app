const RecentCity = (() => {
  let city = null;

  const getCity = () => city;
  const setCity = (newCity) => {
    city = newCity;
  };

  return { getCity, setCity };
})();

export default RecentCity;
