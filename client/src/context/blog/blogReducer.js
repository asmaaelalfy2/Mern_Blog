import { GET_BLOG, ADD_BLOG, DELETE_BLOG, SET_CURRENT,CLEAR_CURRENT,UPDATE_BLOG } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload),
      };

      case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };

      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
    default:
      return state;
  }
};
