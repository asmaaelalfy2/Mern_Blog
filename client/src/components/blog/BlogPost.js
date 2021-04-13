import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import blogContext from '../../context/blog/blogContext';

const BlogPost = () => {
    const { addBlog ,current} = useContext(
        blogContext
      );




    const history = useHistory();

    const handleRoute = () =>{ 
        history.push("/");
      }


//=======changes
      // useEffect(() => {
      //   if (current !== null) {
      //     history.push('/edit')
      //     setBlog(current);
      //   } else {
      //     setBlog({
      //       body: '',
      //       title: '',
      //       tags: [],
           
      //     });
      //   }
      // }, [current]);

      


      ///***** */
    
  const [blog, setBlog] = useState({
    title: '',
    body: '',
    tags: [],
  });
  const { title, body, tags } = blog;
  const onChange = (e) => setBlog({ ...blog, [e.target.name]: e.target.value });


    

  const onSubmit = e => {
    e.preventDefault();
    addBlog(blog)
   
  }
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
          onClick={handleRoute}
          className='btn btn-block btn-primary'
        />
      </div>
    </form>
  );
};
export default BlogPost;
