import React, { useContext } from 'react';
import blogContext from '../../context/blog/blogContext';

const BlogItem = ({ blog }) => {

  const { id, body, title, tags } = blog;
 const {  deleteBlog,setCurrent} = useContext(blogContext)




 
 const onDelete = () => {
  deleteBlog(id);

};
  return (
    <div className=' card bg-light'>
      <h3 className='text-primary text-center '>
        {title}

        <p className='text-right'>
          <button className='btn btn-primary btn-sm' onClick={()=>setCurrent(blog)}>Edit</button>

          <button className='btn btn-danger btn-sm'  onClick={onDelete}>Delete</button>
        </p>
        <div className='text-primary text-left '>{body}</div>
        <span style={{ float: 'center' }}>
          {tags.map((tag) => (
            <span className={'badge badge-success'}>{tag}</span>
          ))}
        </span>
      </h3>
    </div>
  );
};
export default BlogItem;
