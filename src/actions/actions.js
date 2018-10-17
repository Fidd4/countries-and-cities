import * as types from './actionTypes';
import { v4 } from 'uuid';

export const addCity = (country_id, title, desc) =>
  ({
    type: types.ADD_CITY,
    id: v4(),
    country_id,
    title,
    desc
  });

export const removeCity = (id) =>
  ({
    type: types.REMOVE_CITY,
    id
  });

export const editCity = (id, title, desc) =>
  ({
    type: types.EDIT_CITY,
    id,
    title,
    desc
  });

export const setCountry = (country_id) =>
  ({
    type: types.SELECT_COUNTRY,
    country_id
  });