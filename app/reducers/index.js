import candiesReducer from './candiesReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  candies: candiesReducer,
});

// const initialState = {};

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

export default rootReducer;
