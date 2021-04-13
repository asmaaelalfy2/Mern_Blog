import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';

import Home from './components/pages/Home';

import BlogPost from './components/blog/BlogPost'

import BlogState from './context/blog/BlogState';
import './App.css';

const App = () => {
  return (
    <BlogState>
      <Router>
        <Fragment>
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/add' component={BlogPost} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </BlogState>
  );
};

export default App;
