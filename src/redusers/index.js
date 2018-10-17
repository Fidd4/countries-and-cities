import { combineReducers } from 'redux';
import { countries, countryActive } from './countriesReducer';
import { cities } from './citiesReducer';

const rootReducer = combineReducers({
  countries,
  cities,
  countryActive
});

export default rootReducer;