import React from 'react'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux'
//import { createStore } from 'redux'
//import { composeWithDevTools } from 'redux-devtools-extension'
//import rootReducer from '../redux/reducers'


import PageEmployeesList from './PageEmployeesList';
import PageEmployeeCreate from './PageEmployeeCreate';
import PageLogin from './PageLogin';


//const store = createStore(rootReducer, {}, composeWithDevTools())

import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/">
          <PageLogin></PageLogin>
        </Route>
        <Route exact path="/new">
          <PageEmployeeCreate></PageEmployeeCreate>
        </Route>
        <Route exact path="/list">
         <PageEmployeesList></PageEmployeesList>
        </Route>
      </Switch>
    </Router>
  </Provider>
)

export default App