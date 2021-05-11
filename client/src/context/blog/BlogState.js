import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import blogReducer from './blogReducer';
import blogContext from './blogContext';

import {
  GET_BLOG,
  ADD_BLOG,
  DELETE_BLOG,
  UPDATE_BLOG,
  CLEAR_CURRENT,
  SET_CURRENT,
  FILTER_BLOGS,
  CLEAR_FILTER,
  BLOG_ERROR,
  CLEAR_BLOGS,
  GET_BLOG_USER,
} from '../types';

const BlogState = (props) => {
  const initialState = {
    blogs: [],
    current: null,
    filtered: null,
    error: null,
    blog: {},
  };

  const [state, dispatch] = useReducer(blogReducer, initialState);

  //GET Blogs
  const getBlog = async () => {
    try {
      const res = await axios.get('/api/blogs');
      dispatch({ type: GET_BLOG, payload: res.data });
    } catch (err) {
      dispatch({ type: BLOG_ERROR, payload: err.response.msg });
    }
  };

  //Add
  const addBlog = async (blog) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/api/blogs', blog, config);
      // console.log(res.data);
      dispatch({ type: ADD_BLOG, payload: res.data });
    } catch (err) {
      dispatch({ type: BLOG_ERROR, payload: err.response.data.msg });
    }
  };

  //set current blog
  const setCurrent = (blog) => {
    dispatch({ type: SET_CURRENT, payload: blog });
  };

  //clear current blog
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //clear blog

  const clearBlog = () => {
    dispatch({ type: CLEAR_BLOGS });
  };

  //update blog
  const updateBlog = async (blog) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(`/api/blogs/${blog._id}`, blog, config);
      dispatch({ type: UPDATE_BLOG, payload: res.data });
    } catch (err) {
      dispatch({ type: BLOG_ERROR, payload: err.response.data.msg });
    }
  };

  //filter blog
  const filterBlog = (text) => {
    dispatch({ type: FILTER_BLOGS, payload: text });
  };

  //clear filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  //delete blog

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`/api/blogs/${id}`);

      dispatch({ type: DELETE_BLOG, payload: id });
    } catch (err) {
      dispatch({ type: BLOG_ERROR, payload: err.response.msg });
    }
  };

  //get all blogs for user

  const BlogsForASpecificUser = async (id) => {
    try {
      const res = await axios.get(`/api/blogs/user/${id}`);
      // console.log(res.data);
      dispatch({ type: GET_BLOG, payload: res.data });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <blogContext.Provider
      value={{
        blog: state.blog,
        blogs: state.blogs,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addBlog,
        BlogsForASpecificUser,
        clearBlog,
        getBlog,
        deleteBlog,

        setCurrent,
        clearCurrent,
        updateBlog,
        filterBlog,
        clearFilter,
      }}
    >
      {props.children}
    </blogContext.Provider>
  );
};

export default BlogState;
