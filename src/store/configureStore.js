import {createStore } from 'redux'; 
import rootReducer from '../redusers';  

export default function configureStore() {
  return createStore(
    rootReducer
  );
}