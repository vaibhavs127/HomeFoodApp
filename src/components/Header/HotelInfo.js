import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelInfoFromId } from "../../Services/service";
import "./Hotelinfo.css"
import {BsStarFill} from "react-icons/bs";

export function HotelInfo() {
  const { id } = useParams();
  const [docs, setDocs] = useState({});
  useEffect(() => {
    getHotelInfoFromId(id).then(setDocs);
  }, []);
  

  return (
    <>
    
       <div className="header">
                {/* <Hotelinfo /> */}
                <div> 
                    <img src={require('../../Images/1.jpg')} style={{marginTop:"25px", float:"right"}} alt=""/>
                    <img src={require('../../Images/2.jpg')} style={{marginTop:"28px", float:"right"}} alt=""/>
                    {/* <img src={require('../../Images/3.jpg')} style={{marginTop:"48px", float:"right"}} alt=""/> */}
                    <img src={require('../../Images/food123.jpg')} style={{marginTop:"28px", float:"right"}} alt=""/>
                    <img id="restImage" src={docs.featured_image} alt={docs.featured_image}/>
                    {/* <div style={{marginTop:"40%"}} className="headerContainer"> */}
                        <div className="nameOfRest" >
                            <div style={{float:"left"}}>{docs.name}</div>
                            <br/>
                            <div style={{fontSize:"70%"}}>
                                <div style={{float:"left"}}>RS: {docs.average_cost_for_two}</div>
                                {/* <br/> */}
                                <div style={{float:"left"}}>{docs.address}</div>  
                                <br/>
                                {/* <br/> */}
                                <br/>
                                <div className="ratingTimeCost">
                                     
                                     <BsStarFill size="18px"/>
                                     <div style={{float:"left",marginLeft:"5px"}}>{docs.rating} 4.1</div>            
                                </div>
                            </div>
                            
                        </div>
                    {/* </div> */}
                    
                </div>
            </div>

    
    </>
 );
}
export default HotelInfo;