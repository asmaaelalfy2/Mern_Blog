import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import blogContext from '../../context/blog/blogContext';
import AuthContext from '../../context/auth/AuthContext';
import BlogUser from './BlogUser';

const BlogItem = (props) => {
  let blog = props.blog;
  // console.log(blog);

  const { token, user } = useContext(AuthContext);
  const { _id, body, title, tags, userId } = blog;
  const { deleteBlog, clearCurrent, setCurrent, blogs } = useContext(
    blogContext
  );

  const onDelete = () => {
    deleteBlog(_id);
  };

  return (
    <div className=' card bg-light'>
      <h3 className='text-primary text-center '>
        {title}

        {token && (
          <p className='text-right'>
            <Link to='/edit'>
              {' '}
              <button
                className='btn btn-primary btn-sm'
                onClick={() => setCurrent(blog)}
              >
                Edit
              </button>
            </Link>

            <button className='btn btn-danger btn-sm' onClick={onDelete}>
              Delete
            </button>
          </p>
        )}
        <div className='text-primary text-left '>{body}</div>
        <span style={{ float: 'center' }}>
          {tags.map((tag) => (
            <span className={'badge badge-success'}>{tag}</span>
          ))}
        </span>
      </h3>
    </div>
  );

  // if (blog) {
  //   return (
  //     <React.Fragment>
  //       {blogs &&
  //         blogs.map((b) => {
  //           return (
  //             <div
  //               key={b._id}
  //               className='blog-card card text-white mt-1 border-success'
  //               style={{ backgroundColor: '#011528' }}
  //             >
  //               <div className='row no-gutters'>
  //                 <div className='col-md-8'>
  //                   <div className='card-body'>
  //                     <h4 className='card-title my-card-title'>{b.title}</h4>
  //                     <p className='card-text'>{b.body}</p>
  //                     <h6 className='my-card-tags'>{b.tags}</h6>

  //                     <BlogUser id={b._id} time={b.date}></BlogUser>
  //                     { blogs._id === b._id && (
  //                       <div className='card-button'>
  //                         {/* <button
  //                           type="button"
  //                           className="btn btn-outline-info"
  //                           onClick={() => handleUpdatingBlog(blog._id)}
  //                         >
  //                           Edit
  //                         </button> */}
  //                         <button
  //                           type='button'
  //                           className='btn btn-outline-info'
  //                           onClick={() => onDelete(b._id)}
  //                         >
  //                           Delete
  //                         </button>
  //                       </div>
  //                     )}
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
  //           );
  //         })}
  //     </React.Fragment>
  //   );
  // // }
  // // return <h1>loading</h1>;
};

export default BlogItem;

// const { token, user } = useContext(AuthContext);
//   const { _id, body, title, tags, userId } = blog;
//   const { deleteBlog, clearCurrent, setCurrent } = useContext(blogContext);

// return(  <div className=' card bg-light'>
// <h3 className='text-primary text-center '>
//   {title}

//   {token && (
//     <p className='text-right'>
//       <Link to='/edit'>
//         {' '}
//         <button
//           className='btn btn-primary btn-sm'
//           onClick={() => setCurrent(blog)}
//         >
//           Edit
//         </button>
//       </Link>

//       <button className='btn btn-danger btn-sm' onClick={onDelete}>
//         Delete
//       </button>
//     </p>
//   )}
//   <div className='text-primary text-left '>{body}</div>
//   <span style={{ float: 'center' }}>
//     {tags.map((tag) => (
//       <span className={'badge badge-success'}>{tag}</span>
//     ))}
//   </span>

// </h3>

// </div>)
