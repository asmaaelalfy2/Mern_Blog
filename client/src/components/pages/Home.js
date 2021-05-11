import React, { useContext, useEffect } from 'react';
import BlogCard from '../blog/BlogCard';
import { Link } from 'react-router-dom';
import BlogFilter from '../blog/BlogFilter';
import AuthContext from '../../context/auth/AuthContext';
const Home = () => {
  const { token, loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);
  return (
    <div>
      {token && (
        <ul>
          <li>
            <Link to='/add'>
              {' '}
              <button className='btn btn-success btn-sm'>ADD BLOG</button>
            </Link>
          </li>
        </ul>
      )}

      <BlogFilter />
      {/* <p className='text-right' Link to='/add'>
          <button className='btn btn-primary btn-sm'>ADD BLOG</button>
          </p> */}
      <BlogCard />
    </div>
  );
};

export default Home;
