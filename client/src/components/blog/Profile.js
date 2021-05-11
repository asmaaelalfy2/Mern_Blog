import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import userContext from '../../context/users/userContext';
import blogContext from '../../context/blog/blogContext';

import AuthContext from '../../context/auth/AuthContext';
import { Spinner } from '../layouts/Spinner';
import ProfileCard from './ProfileCard';

const Profile = (props) => {
  const { getUserById, user } = useContext(userContext);
  const { BlogsForASpecificUser, blogs } = useContext(blogContext);
  const { followerUser,unfollowerUser, token } = useContext(AuthContext);

  useEffect(() => {
    getUserById(props.match.params.id);
    BlogsForASpecificUser(props.match.params.id);
  }, [props.match.params.id]);

  const handleFollowingUser = () => {
    followerUser(user._id);
  };

  const handleUnFollowingUser = () => {
    unfollowerUser(user._id);
  };

  return (
    <React.Fragment>
      <div className='profile-card card bg-light'>
        {/* <img
          className='card-img'
          src='data:image/jpeg;base64,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'
          alt='...'
        /> */}
        <div className='card bg-light'>
          <h2 className='card-title '>
            <span className=' text-success'>
              {' '}
              {user.firstname} {user.lastname}
            </span>
          </h2>
          <h2 className='card-title   '>
            {' '}
            <span className=' text-success'>{user.email}</span>{' '}
          </h2>
          {token && (
            <div>
              <button
                className='btn btn-primary font-weight-bold font-italic'
                onClick={handleFollowingUser}
              >
                Follow
              </button>
              <button
                className='btn btn-danger font-weight-bold font-italic'
                onClick={handleUnFollowingUser}
              >
                UnFollow
              </button>
              {/* </button>
           
                {props.auth.item.followers?.indexOf(props.anyUser._id) !==
                  -1 && (
                  <button
                    className='btn text-danger font-weight-bold font-italic'
                    onClick={handleUnFollowingUser}
                  >
                    Unfollow
                  </button> */}
              {/* )} */}
            </div>
          )}
          {/* )
          <img
            src='https://images.forbes.com/media/assets/thoughts/images/silhouette.jpg'
            // src={
            //   props.anyUser.image
            //     ? getImageUrl(props.anyUser.image)
            //     : "https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132484366.jpg"
            // }

            alt=''
            className='profile-card-image's
            // style={{ maxWidth: "200px" }}
          /> */}
        </div>
      </div>
      {/* {console.log(blogs)} */}

      {blogs.map((element) => console.log(element))}

      {blogs.map((blog) => (
        <ProfileCard blog={blog} />
      ))}
      {/* { blogs.map((blog) => <ProfileCard blog={blog} key={blog._id} />)} */}
      {/* <div>{BlogsForASpecificUser}</div> */}
      {/* <ProfileCard blogs={BlogsForASpecificUser}></ProfileCard> */}
    </React.Fragment>
  );
};

export default Profile;
