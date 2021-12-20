import axios from 'axios';

//action type constants
const SET_BLOGGERS = 'SET_BLOGGERS'

//action creators
const _setBloggers = (bloggers) => {
  return {
    type: SET_BLOGGERS,
    payload: bloggers
  };
};

//thunk creators
export const setBloggers = () => {
  return async(dispatch) => {
    const { data: bloggers } = await axios.get('/api/bloggers');
    dispatch(_setBloggers(bloggers))
  }
}

//reducer
export default function bloggerReducer(state={}, action) {
  switch(action.type) {
    case SET_BLOGGERS:
      return action.payload
    default:
      return state;
  }
};
