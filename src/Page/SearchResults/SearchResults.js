import React, { useEffect, useMemo, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getNameFromZomato } from "../../Services/service";
import style from "../../components/SearchForm/SearchForm1.css";
import './SearchResult.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ReactImageFallback from 'react-image-fallback';

function SearchResults() {
  const params = useLocation();
  const [results, setResult] = useState([]);

  const query = useMemo(() => {
    return new URLSearchParams(params.search).get("q");
  }, [params.search]);

  useEffect(() => {
    getNameFromZomato(query).then((docs) => {
      setResult(docs.restaurants);
    });
  }, [query]);
  // style={{display:"inline",display:"block"}}

  return (
    <>
    <div className="container1">
    <div className="row">
        <div className="col-md-12">
              <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-danger font-weight-bold" href="#">Home Food</a>
                <Link className="navbar-brand text-danger font-weight-bold" to="/" style={{marginLeft:"1080px"}}>Logout</Link>
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
             </nav>
        </div>
        </div>
    </div>
    <div style={{background:"#363131", marginTop:"-41px"}}>
      <img src={require('../../Images/food123.jpg')} style={{marginTop:"2px",position:"fixed" ,left:"1158px"}} alt=""/>
      <img src={require('../../Images/4.jpg')} style={{marginTop:"130px",position:"fixed" ,left:"1158px"}} alt=""/>
      <img src={require('../../Images/5.jpg')} style={{marginTop:"260px",position:"fixed" ,left:"1158px"}} alt=""/>
      <img src={require('../../Images/2.jpg')} style={{marginTop:"395px",position:"fixed" ,left:"1158px"}} alt=""/>
      <img src={require('../../Images/3.jpg')} style={{marginTop:"550px",position:"fixed" ,left:"1158px"}} alt=""/>
      <div className="container" style={{marginTop:"3%",marginLeft:"10px" , background:"#cccccc", borderRadius:"20px", border:"5px solid black"}}>
      
      <div   >
                
                <div >
                    <div >
                      {results.map((result) => {
                        const restaurant = result.restaurant;
                        return (
                          <div style={{display: "inline-block"}}>
                          
                          <Link 
                            to={`/hotel/${restaurant.id}`}
                            key={result.restaurant.id}
                          >
                            
                          <Card style={{ width: '18rem' , height:'23rem' ,marginLeft:"60px",background:"white" }}>
                                <Card.Img variant="top" src={restaurant.featured_image}   height="150px"/>
                                
                              
                                <Card.Body >
                                  <Card.Title style={{marginLeft:"-290px" ,marginTop:"160px"}}>{restaurant.name}</Card.Title>
                                    <Card.Text style={{marginLeft:"-290px" ,marginTop:"30px"}}>
                                      Ratings: {restaurant.user_rating.rating_text}
                                    </Card.Text>
                                    <Button variant="primary"style={{marginLeft:"-215px" ,marginTop:"20px"}}>Order Food</Button>
                                
                                  </Card.Body>
                                  
                            </Card>
                        
                            
                          </Link>
                          </div>
                        );
                      })}
          </div>
        </div>
      </div>
              
      </div>
    </div>
    </>
  );
  }
 export default SearchResults;

{/* <div className="container">
        <div className={style.List} >
        <div className={style.ListItemWrapper} >
          {results.map((result) => {
            const restaurant = result.restaurant;
            return (
              <Link
                to={`/hotel/${restaurant.id}`}
                className={style.ListLink}
                key={result.restaurant.id}
              >
                <div className={style.ListItem}>
                  {restaurant.featured_image && (
                    <img src={restaurant.featured_image} alt="" />
                  )}
                  <br />
                  <b>{restaurant.name}</b>
                  <br />
                  <span>Ratings: {restaurant.user_rating.rating_text}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
              
      </div> */}