import React, {Component} from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route} 
from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import MainPage from './components/MainPage/MainPage';

class Routes extends Component{
  render(){
    return(
      <Router>
          <Switch>
            <Route path="/" exact component={MainPage} /> 
            <Route path="/Login" exact component={Login} /> 
            <Route path="/Registration" exact component={Registration} />                                                           
          </Switch>
    </Router>
    );
  }
}

export default Routes;