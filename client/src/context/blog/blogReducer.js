import {
  GET_BLOG,
  ADD_BLOG,
  CLEAR_FILTER,
  DELETE_BLOG,
  FILTER_BLOGS,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_BLOG,
  BLOG_ERROR,
  CLEAR_BLOGS,
  GET_BLOG_USER,
} from '../types';

const blogReducer = (state, action) => {
  switch (action.type) {
    case GET_BLOG:
      return {
        ...state,
        blogs: action.payload,
        loading: false,
      };

    // case GET_BLOG_USER:
    //   return {
    //     ...state,
    //     blog:action.payload,
    //     // blogs: action.payload,
    //     loading: false,
    //   };
    case ADD_BLOG:
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
        loading: false,
      };

    case UPDATE_BLOG:
      return {
        ...state,
        blogs: state.blogs.map((blog) =>
          blog._id === action.payload._id ? action.payload : blog
        ),
        loading: false,
      };

    case BLOG_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };

    case FILTER_BLOGS:
      return {
        ...state,
        filtered: state.blogs.filter((blog) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return blog.title.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
        loading: false,
      };

    case CLEAR_BLOGS:
      return {
        ...state,
        filtered: null,
        error: null,
        blogs: null,
        current: null,
      };

    default:
      return state;
  }
};

export default blogReducer;
