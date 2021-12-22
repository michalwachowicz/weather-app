import { displayRecentCityWeather, displayWeather } from '../weatherDisplayer';

export default function loadForm() {
  const form = document.querySelector('form.search-bar');
  const input = document.querySelector('.search-bar__search__input');
  const checkbox = document.querySelector('#temp-switch');

  if (!localStorage.getItem('units')) localStorage.setItem('units', 'metric');
  if (localStorage.getItem('units') === 'imperial') checkbox.checked = true;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value.trim().length === 0) return;

    const city = input.value.toLowerCase().replaceAll(' ', '+');
    displayWeather(city, localStorage.units);
    input.value = '';
  });

  checkbox.addEventListener('click', () => {
    localStorage.units = checkbox.checked ? 'imperial' : 'metric';
    displayRecentCityWeather();
  });
}
