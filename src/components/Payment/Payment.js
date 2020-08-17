import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './Payment.css';
import 'bootstrap/dist/css/bootstrap.css';
import Menu from './Menu';
import Card from './Card';
import visa from '../../Images/visa.jpg';
import mestro from '../../Images/mestro.jpg';
import Newcard from './Newcard';



class Payment extends Component{

        

        render(){


                return(

                        <div className="Paymentpage">
                        <h1 style={{marginLeft:"22px"}}><b>Choose payment method</b></h1>   

                        <Menu/>

                        <Card cardno="896541236589" cardtype="DEBIT" cardexpiry="7/24" price="$216" src={visa} onClick={this.OrderPlace}/>
                        <Card cardno="256985452123" cardtype="CREDIT" cardexpiry="6/25" price="$216" src={mestro} onClick={this.OrderPlace}/>     
                        
                        <Newcard/>
                        </div>




                )

        }
}

export default Payment;
