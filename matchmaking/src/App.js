import React, { Fragment } from 'react';
import './App.css';
import Header from './Header';
import {BrowserRouter as Router , Route, Switch  } from 'react-router-dom'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen'
function App() {
  return (
    <Fragment className ='App'>
      <Router>
        <Switch>
          <Route exact path='/chat/:person'>
            <Header  backButton='/chat' />
            <ChatScreen />
          </Route>
          <Route exact path='/' >
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>
          <Route exact path='/chat'>
            <Header  backButton='/' />
            <Chats />
          </Route>

        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
