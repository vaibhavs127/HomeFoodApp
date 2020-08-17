import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Card.css';
import visa from '../../Images/visa.jpg';
import rupay from '../../Images/rupay.png';
import mestro from '../../Images/mestro.jpg';
import AX from '../../Images/AX.jpg';
import zeto from '../../Images//zeto.png';
import swal from 'sweetalert';

function OrderPlace(e){
        e.preventDefault();
                swal("Please Enter Your Address:", 
                {
                        content: "input",
                })
                .then((value) => {
                        swal(`You Delivery Address: ${value},
                                title: "Your order will be delivered on your address",
                                text: "Thank You",
                                Order Details:"",
                                Bill Details:"",
                                Final Payment:""`);
                        // swal({icon:"success"});
                                
                });

        }

const Card = (props) => {
        
                return(
                        <div className="cardDesign">
                                <div className="card w-100">
                                <div className="card-body">
                                <img className="logo" src={props.src} alt={props.src} />
                                <h5 className="card-title">{props.cardno}</h5>
                                <p className="card-text">{props.cardtype} CARD | VALID TILL {props.cardexpiry}</p>
                                <span><input className="cvv" type="text" placeholder="CVV"/></span>
                                <a href="#" className="btn btn-primary button" onClick={OrderPlace}> Pay {props.price}</a>
                                </div>
                                </div>
                        </div>
                )
}

export default Card;