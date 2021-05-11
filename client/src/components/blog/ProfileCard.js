import React from 'react';

const ProfileCard = ({ blog }) => {
  // console.log(blogs);
  const { body, title, tags } = blog;
  return (
    <div className='profile-card card bg-light'>
      <h3 className='text-primary text-center '>
        {title}
        <br />

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
export default ProfileCard;
