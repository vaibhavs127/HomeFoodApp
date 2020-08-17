import React from 'react';
import './Hotel.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Hotel(){
    return(
        
       <div>
        <div className="container1">
            <nav className="navbar navbar-expand-lg  bg-dark sticky-top">
      {/* <a className="navbar-brand text-danger font-weight-bold" href="#">Amazon</a> */}
      <button
        className="navbar-toggler bg-danger"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a id="nav-i" className="nav-link text-white font-weight-bold" href="#"
              ><b>Home</b> <span className="sr-only">(current)</span></a
            >
          </li>
          <li id="nav-i" className="nav-item">
            <a className="nav-link text-white font-weight-bold" href="#"><b>About</b></a>
          </li>
          <li className="nav-item">
            <a id="nav-i" className="nav-link text-white font-weight-bold" href="#"
              ><b>Contact Us</b></a
            >
          </li>
          <li className="nav-item">
            <a id="nav-i" className="nav-link text-white font-weight-bold" href="#"
              ><b>Sign Up</b></a
            >
          </li>
        </ul>
      </div>
    </nav>
    
    
    <div className="row" id="mar">
                
                <div className="col-md-9">
                    <div className="row" id="all">

                        <div className="col-md-4 col-3">
                            <div className="card" >
                            
                                <img className="card-img-top" src="./img02.png" alt="Card image" />
                                <hr/>
                                <div className="card-body">
                                
                                <h4 className="card-title">John Doe</h4>
                                <h6 className="badge badge-success">rating</h6>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-3">
                            <div className="card" >
                            
                                <img className="card-img-top" src="./img01.png" alt="Card image" />
                                <hr/>
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <h6 className="badge badge-success">rating</h6>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-3">
                            <div className="card" >
                            
                                <img className="card-img-top" src="./img3.jpg" alt="Card image" />
                                <hr/>
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <h6 className="badge badge-success">rating</h6>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-3">
                            <div className="card" >
                            
                                <img className="card-img-top" src="img04.png" alt="Card image" />
                                <hr/>
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <h6 className="badge badge-success">rating</h6>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-3">
                            <div className="card" >
                            
                                <img className="card-img-top" src="img05.png" alt="Card image" />
                                <hr/>
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    
                                    <h6 className="badge badge-success">rating</h6>
                                
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-md-3 col-3">   
                            <div className="row">
                                abc
                            </div>
                        </div> 
                    
        </div>
        </div>
        </div>
    );
}