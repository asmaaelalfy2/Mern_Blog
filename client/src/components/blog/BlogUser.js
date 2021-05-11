import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import blogContext from '../../context/blog/blogContext';

import { Spinner } from '../layouts/Spinner';

const BlogOwner = (props) => {
  const { BlogsForASpecificUser, blogs } = useContext(blogContext);
  const id = props.id;
  const [user, setUser] = useState(null);
  useEffect(() => {
    (async function () {
      const x = await BlogsForASpecificUser(id);
      setUser(x);
    })();
  }, []);

  if (user) {
    return (
      <React.Fragment>
        <Link to={`/profile/${user._id}`}>
          <div className='profile-container'>
            <div className='profile-name-container'>
              <small className='text-success'>
                &nbsp;&nbsp;
                {user.firstname}
              </small>
              <small className='text-muted'>
                &nbsp;&nbsp;
                {moment(props.time).format('MMMM Do YYYY, h:mm:ss a')}
              </small>
            </div>
          </div>
        </Link>
      </React.Fragment>
    );
  }
  return <Spinner />;
};

export default BlogOwner;
