import axios from 'axios';

//action type constants
const SET_BLOGS = 'SET_BLOGS';

//action creators
const _setBlogs = (blogs) => {
  return {
    type: SET_BLOGS,
    payload: blogs
  };
};

//thunk creators
export const setBlogs = () => {
  return async(dispatch) => {
    const { data: blogs } = await axios.get('/api/blogs');
    dispatch(_setBlogs(blogs))
  };
};

//reducer
export default function blogReducer(state={}, action) {
  switch(action.type) {
    case SET_BLOGS:
      return action.payload
    default:
      return state;
  }
};
