import { combineReducers } from 'redux';

import ForecastReducer from './reducer_forecast';

const rootReducer = combineReducers({
  //state: (state = {}) => state
  weather: ForecastReducer
})


export default rootReducer;
