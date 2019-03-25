import axios from 'axios';

// ACTION TYPES
const SET_CANDIES = 'GET_CANDIES';

//ACTION CREATORS
const setCandies = candies => ({
  type: SET_CANDIES,
  candies,
});

//THUNK
export const fetchCandies = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/candies');
    dispatch(setCandies(data));
  } catch (error) {
    console.error(error);
  }
};

//INITIAL STATE
let candies = [];

//REDUCERS
const candiesReducer = (state = candies, action) => {
  switch (action.type) {
    case SET_CANDIES:
      return action.candies;
    default:
      return state;
  }
};

export default candiesReducer;
