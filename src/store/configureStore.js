import { createStore } from 'redux'; 
import rootReducer from '../redusers';  

export default function configureStore() {
  return createStore(
    rootReducer,
    (localStorage['redux-store']) ?
      JSON.parse(localStorage['redux-store']) :
      {}
  );
}