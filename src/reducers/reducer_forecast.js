import { FETCH_FORECAST, FETCH_CURRENT_WEATHER } from '../actions/';

export default function(state = {}, action) {
  switch(action.type) {
    case FETCH_FORECAST:
      return {...state,  forecast: action.payload.data };
    case FETCH_CURRENT_WEATHER:
      return {...state, current_weather: action.payload.data};
    default:
      return {forecast: {}, current_weather: {}};
  }
}
