import React, { Fragment, useContext, useEffect } from 'react';

import blogContext from '../../context/blog/blogContext';
import BlogItem from './BlogItem';
import { Spinner } from '../layouts/Spinner';

const BlogCard = () => {
  const { blogs, filtered, getBlog, loading } = useContext(blogContext);
  // getBlog();

  useEffect(() => {
    getBlog();

    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {blogs !== null && !loading ? (
        <>
          {' '}
          {filtered !== null
            ? filtered.map((blog) => <BlogItem blog={blog} />)
            : blogs.map((blog) => <BlogItem blog={blog} key={blog._id} />)}{' '}
        </>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};
export default BlogCard;
