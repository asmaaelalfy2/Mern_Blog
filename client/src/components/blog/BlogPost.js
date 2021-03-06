import React, { useState, useContext, useEffect } from 'react';
import { useHistory, Redirect } from 'react-router-dom';
import blogContext from '../../context/blog/blogContext';

const BlogPost = () => {
  const { addBlog, current, clearBlog, updateBlog } = useContext(blogContext);

  const [blog, setBlog] = useState({
    title: '',
    body: '',
    tags: [],
  });
  const { title, body, tags } = blog;
  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });
  let history = useHistory();

  useEffect(() => {
    if (current == null) {
      setBlog({
        title: '',
        body: '',
        tags: [],
      });
    }
  }, [current]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (current == null) {
      addBlog(blog);
      return history.push('/');
    }
    clearBlog();
  };
  // const clearAll = () => {
  //   clearContact();
  // };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Create Blog</h2>

      <input
        type='text'
        name='title'
        placeholder='Title'
        value={title}
        onChange={onChange}
      />
      <textarea
        type='text'
        name='body'
        placeholder='Description'
        value={body}
        onChange={onChange}
      />

      <input
        type='text'
        name='tags'
        placeholder='Tags'
        value={tags}
        onChange={onChange}
      />

      <div>
        <input
          type='submit'
          value='submit'
          className='btn btn-block btn-primary'
        />
      </div>
    </form>
  );
};
export default BlogPost;
