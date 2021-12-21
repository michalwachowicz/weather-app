const apiKey = '3906e07ce1dbc41797220c138aabef35';
const apiUrl = 'https://api.openweathermap.org/data/2.5';

export default async function getResponse(options) {
  const response = await fetch(`${apiUrl}/${options}&appid=${apiKey}`);
  return response;
}
