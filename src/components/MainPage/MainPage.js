import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialFollow from './SocialFollow';
import swal from 'sweetalert';
import './MainPage.css';

class MainPage extends Component {

        login(){
                swal({
                  title: "Failed",
                  text: "Want a food then Please Login or Register",
                  icon: "error",
                });

        }

    render() {
        return (
            <div className="MainImg">
                    <h3 className="Header">Home Food</h3>
                <div className="NavBar">
                    <ul>
                        <li>Search</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                    <h3 className="HotelBtn" onClick={this.login}>Check Out Hotels</h3> 
                    <Link className="SignIn" to="/Login">Login</Link>    
                <SocialFollow />
            </div> 
        )
    }
}

export default MainPage
