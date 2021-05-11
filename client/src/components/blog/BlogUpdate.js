import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import blogContext from '../../context/blog/blogContext';

const BlogUpdate = () => {
  const { updateBlog, current } = useContext(blogContext);

  const history = useHistory();

  useEffect(() => {
    if (current !== null) {
      setBlog(current);
    } else {
      setBlog({
        body: '',
        title: '',
        tags: [],
      });
    }
  }, [current]);

  const [blog, setBlog] = useState({
    title: '',
    body: '',
    tags: [],
  });
  const { title, body, tags } = blog;
  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if(current !==null){
      updateBlog(blog);
      return history.push('/');
    }
   
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>Update Blog</h2>

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
          value='Update'
          className='btn btn-block btn-primary'
        />
      </div>
    </form>
  );
};
export default BlogUpdate;
