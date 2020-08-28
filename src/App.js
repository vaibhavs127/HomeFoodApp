import React, { Component } from 'react';
import { 
  BrowserRouter,
  Switch,
  Route} 
from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import MainPage from './components/MainPage/MainPage';
import SearchForm from './components/SearchForm/SearchForm';
import SearchResults from "./Page/SearchResults/SearchResults";
import Payment from "./components/Payment/Payment";
import AboutUs from "./components/AboutUs/AboutUs";
import './App.css';
import HotelInfo from "./components/Header/HotelInfo";
import Body from "./components/Body/Body";

class App extends Component{

  render(){
    return(
      <BrowserRouter>
          
      <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/AboutUs" >  
            <AboutUs /></Route>
            <Route path="/Login" component={Login} /> 
            <Route path="/Registration" component={Registration} >
            <Registration /></Route>
            <Route path="/SearchForm" component={SearchForm} /> 
            <Route path="/search">
            <SearchResults /></Route>
            <Route path="/Payment" exact component={Payment}>
            <Payment/></Route>
            <Route path="/hotel/:id" component={Body} />
            <Body/>
            <Route path="/Body" component={Body} />                                                         
          </Switch> 
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
