import React from 'react';
import './AboutUs.css';
import Pic from '../../Images/about.jpg';
import Pic2 from '../../Images/food1234.jpg';
import Pic3 from '../../Images/food12345.jpg';
import Vaibhav from '../../Images/vaibhav.jpg';
import Shubham from '../../Images/shubham.jpg';
import Shivani from '../../Images/shivani.jpg';
import Arbaj from '../../Images/arbaj.jpg';
import Sneha from '../../Images/sneha.jpg';
import { Link } from 'react-router-dom';

export default function AboutUs() {
    return (
        <div className="aboutus-section">
        <div className="container">
         <Link className="SignIn" to="/Login" style={{marginLeft:"230px" , position:"fixed"}}>Login</Link> 
         <Link className="SignIn" to="/Registration" style={{marginLeft:"380px" , position:"fixed"}}>Register</Link> 
            <div className="row">
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="aboutus">
                        <h2 className="aboutus-title">About Us</h2>
                        <p className="aboutus-text" style={{textAlign: "justify"}}>Home food is an online food delivery portal where customers can find meals or food from any nearby restaurants. The idea is to serve food in minimum cost and provide good quality of service so that customers can eat a healthy food</p>
                        <p className="aboutus-text" style={{textAlign: "justify"}}>The project goal is that we are making the online food delivery portal where customers can find meals or food from any nearby restaurants. The idea is to serve meals prepared by a family member so that customers can eat a healthy home-cooked meal. And also we are adding the online payment option so that user can pay online or they can pay on delivery</p>
                        <a className="aboutus-more" href="">read more</a>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12">
                    <div classNameName="aboutus-banner">
                        <img src={Pic} alt="" height="600px" style={{marginLeft:"10px"}}/>
                    </div>
                </div>
                <div className="col-md-5 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="feature-box">
                        <h1 className="aboutus-title">Our Team</h1>
                            <div className="clearfix">
                                <div className="iconset">
                                    <img src={Vaibhav} className="glyphicon glyphicon-cog icon"/>
                                </div>
                                <div className="feature-content">
                                    <h2>Vaibhav Shinde</h2>
                                    <h5>Front End Developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <img src={Shubham} className="glyphicon glyphicon-cog icon"/>
                                </div>
                                <div className="feature-content">
                                    <h2>Shubham Vibhute</h2>
                                    <h5>Front End Developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <img src={Shivani} className="glyphicon glyphicon-cog icon"/>
                                </div>
                                <div className="feature-content">
                                    <h2>Shivani Dinde</h2>
                                    <h5>Front End Developer</h5>
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <img src={Arbaj} className="glyphicon glyphicon-cog icon"/>
                                </div>
                                <div className="feature-content">
                                    <h2>Arbaj Shaikh</h2>
                                    <h5>Front End Developer</h5>    
                                </div>
                            </div>
                        </div>
                        <div className="feature-box">
                            <div className="clearfix">
                                <div className="iconset">
                                    <img src={Sneha} className="glyphicon glyphicon-cog icon"/>
                                </div>
                                <div className="feature-content">
                                    <h2>Sneha Hanchate</h2>
                                    <h5>Front End Developer</h5>   
                                </div>
                            </div>
                        </div>
                        
                        <img src={Pic3} alt="" height="170px" style={{marginLeft:"395px", marginTop:"-750px"}}/>
                        <img src={Pic2} alt="" height="170px" style={{marginLeft:"380px", marginTop:"-350px"}}/>
                
                    </div>
                </div>
            </div>
        </div>
    </div>
            
    )
}
