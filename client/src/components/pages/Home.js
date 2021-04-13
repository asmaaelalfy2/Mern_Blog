import React from 'react';
import BlogCard from '../blog/BlogCard';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/add'>
            {' '}
            <button className='btn btn-success btn-sm'>ADD BLOG</button>
          </Link>
        </li>
      </ul>
      {/* <p className='text-right' Link to='/add'>
          <button className='btn btn-primary btn-sm'>ADD BLOG</button>
          </p> */}
      <BlogCard />
    </div>
  );
};

export default Home;
