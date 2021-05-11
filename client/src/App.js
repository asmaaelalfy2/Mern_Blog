import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';

import Home from './components/pages/Home';

import BlogPost from './components/blog/BlogPost';

import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layouts/Alerts';

import BlogUpdate from './components/blog/BlogUpdate';
import Profile from './components/blog/Profile'


import BlogState from './context/blog/BlogState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import UserState from './context/users/UserState';

import setAuthToken from './utils/setAuthToken';

//private route
import PrivateRoute from './components/routing/PrivateRoute';

import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AlertState>
      <AuthState>
        <BlogState>
          <UserState>
            <Router>
              <Fragment>
                <Navbar />
                <div className='container'>
                  <Alerts />
                  <Switch>
                    <Route exact path='/profile/:id' component={Profile} />
                    <Route exact path='/add' component={BlogPost} />
                    <Route exact path='/edit' component={BlogUpdate} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/' component={Home} />
                  </Switch>
                </div>
              </Fragment>
            </Router>
          </UserState>
        </BlogState>
      </AuthState>
    </AlertState>
  );
};

export default App;
