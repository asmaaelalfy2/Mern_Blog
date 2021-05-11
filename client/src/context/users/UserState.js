import userContext from './userContext';
// import { v4 as uuidv4 } from 'uuid';

import React, { useReducer } from 'react';
import axios from 'axios';

import { GET_USER } from '../types';

import userReducer from './userReducer';

const UserState = (props) => {
  const initialState = {
    users: [],
    user: {},
  };

  const [state, dispatch] = useReducer(userReducer, initialState);
  const getUserById = async (id) => {
    try {
      const res = await axios.get(`/api/users/${id}`);
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <userContext.Provider
      value={{
        users: state.users,
        user: state.user,
        getUserById,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
