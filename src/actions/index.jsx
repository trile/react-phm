import axios from 'axios';

import config from '../../config/config.json';

export const FETCH_FORECAST = 'FETCH_FORECAST';
export const FETCH_CURRENT_WEATHER = 'FETCH_CURENT_WEATHER';

const OWM_KEY = config.api_key.OWM;
const FORECAST_URL = `http://api.openweathermap.org/data/2.5/forecast?units=metric&appid=${OWM_KEY}`;
const CURRENT_WEATHER_URL = `http://api.openweathermap.org/data/2.5/weather?units=metric&appid=${OWM_KEY}`;
const CITY = '1566083';
const ICON_URL = 'http://openweathermap.org/img/w/';

export function fetchForecast() {
  const forecast_url = `${FORECAST_URL}&id=${CITY}`;
  console.log(forecast_url);
  const request = axios.get(forecast_url);


  return {
    type: FETCH_FORECAST,
    payload: request
  }
}

export function fetchCurrentWeather() {
  const current_weather_url = `${CURRENT_WEATHER_URL}&id=${CITY}`;
  console.log(current_weather_url);

  const request = axios.get(current_weather_url);

  return {
    type: FETCH_CURRENT_WEATHER,
    payload: request
  }
}
