import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SocialFollow from './SocialFollow';
import MoreInfo from './MoreInfo';
import Footer from './Footer';
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
        <div>
            <div className="MainImg">
                    <h3 className="Header">Home Food</h3>
                <div className="NavBar">
                    <ul>
                        <li>Search</li>
                        <li><Link to="/AboutUs" style={{color:"black"}}>About</Link></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                    <h3 className="HotelBtn" onClick={this.login}>Check Out Hotels</h3> 
                    <Link className="SignIn" to="/Login">Login</Link>    
                <SocialFollow />
                
            </div> 
            <div>
                <img src={require('../../Images/paymentback.jpg')} style={{backgroundSize:"cover",width:"100%",height:"718px"}} alt=""/>
                <MoreInfo  />
            </div>
                <div>
                   <Footer />
                </div>
        </div>
            
                
        )
    }
}

export default MainPage
