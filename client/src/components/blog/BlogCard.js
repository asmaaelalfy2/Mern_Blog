import React, { Fragment, useContext, useEffect } from 'react';

import blogContext from '../../context/blog/blogContext';
import BlogItem from './BlogItem';
// import { Spinner } from '../layout/Spinner';


const BlogCard = () => {
  const { blogs } = useContext(blogContext);

  return (
    <Fragment>
      {blogs.map((blog) => (
        <BlogItem  blog={blog}/>
    
      ))}


    </Fragment>
  );
};
export default BlogCard;
