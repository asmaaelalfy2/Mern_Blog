import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import blogReducer from './blogReducer';
import blogContext from './blogContext';

import {
  GET_BLOG,
  ADD_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG,
  CLEAR_CURRENT,
  SET_CURRENT,
} from '../types';

const BlogState = (props) => {
  const initialState = {
    blogs: [
      { id: 1, body: 'harybotter', title: 'web', tags: ['dev', 'web'] },

      { id: 2, body: 'harybotter', title: 'web', tags: ['dev', 'web'] },
      { id: 3, body: 'harybotter', title: 'web', tags: ['dev', 'web'] },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  //Add Blogs
  const addBlog = (blog) => {
    blog.id = uuidv4();
    dispatch({ type: ADD_BLOG, payload: blog });
  };

  //Delete Blog
  const deleteBlog = (id) => {
    dispatch({ type: DELETE_BLOG, payload: id });
  };

  //set current blog
  const setCurrent = (blog) => {
    dispatch({ type: SET_CURRENT, payload: blog });
  };

  //clear current blog
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <blogContext.Provider
      value={{
        blogs: state.blogs,
        current: state.current,
        addBlog,
        deleteBlog,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
