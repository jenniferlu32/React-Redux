import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setBlogs } from '../store/blogs';
import { setBloggers } from '../store/bloggers';
import Blogs from './Blogs';

const Main = (props) => {
  let state = useSelector(state => state)
  const dispatch = useDispatch();
  React.useEffect(() => {
    let fetchState = {
      blogs: dispatch(setBlogs()),
      bloggers: dispatch(setBloggers())
    }
  }, []);

  return (
    <Blogs />
  )
};

/*

const mapStateToProps = ({ blogs, bloggers }) => ({ //useSelector
  blogs,
  bloggers
});

const mapDispatchToProps = (dispatch) => { //useDispatch
  return {
    loadBlogs: () => dispatch(setBlogs()),
    loadBloggers: () => dispatch(setBloggers())
  };
};
*/

export default Main;
