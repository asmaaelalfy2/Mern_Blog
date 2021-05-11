import React, { Fragment, useContext } from 'react';

import { Link } from 'react-router-dom';

import AuthContext from '../../context/auth/AuthContext';

import  blogContext from '../../context/blog/blogContext'


const Navbar = ({ title, icon }) => {
  const { logout, user, isAuthenticated } = useContext(AuthContext);
  const{clearBlog}=useContext(blogContext)

  const onLogOut = () => {
    logout();
    clearBlog()
  };

  const authLink = (
    <Fragment>
      <li>Hello {user && user.firstname}</li>
      <li>
        <a href='#?' onClick={onLogOut}>
          <i className='fas fa-sign-out-alt'></i>
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/'>Home</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
};
Navbar.defaultProps = {
  title: 'DevBlog',
  icon: 'fas fa-blog',
};

export default Navbar;
