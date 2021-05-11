import React, { useContext, useRef, useEffect } from 'react';
import blogContext from '../../context/blog/blogContext';

const BlogFilter = () => {
  const {filterBlog, filtered, clearFilter } = useContext(blogContext);

  const text = useRef();

  useEffect(() => {
    if (filtered == null) {
      text.current.value = '';
    }
  });

  const onchange = e => {
    if (text.current.value !== '') {
        filterBlog(e.target.value);
    } else {
      clearFilter();
    }
  };
  
  return (
    <form>
      <input
        type='text'
        ref={text}
        placeholder='Search....'
        onChange={onchange}
      />
    </form>
  );
};

export default BlogFilter;