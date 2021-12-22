import 'regenerator-runtime/runtime';
import '../scss/index.scss';
import loadForm from './ui/components/searchForm';
import { displayCurrentLocationWeather } from './ui/weatherDisplayer';

loadForm();
displayCurrentLocationWeather();
