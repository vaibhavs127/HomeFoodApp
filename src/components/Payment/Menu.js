import React, { Component } from 'react';
import visa from '../../Images/visa.jpg';
import rupay from '../../Images/rupay.png';
import mestro from '../../Images/mestro.jpg';
import AX from '../../Images/AX.jpg';
import zeto from '../../Images/zeto.png';
import './menu.css';

import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import RedeemIcon from '@material-ui/icons/Redeem';
import ReceiptIcon from '@material-ui/icons/Receipt';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PaymentIcon from '@material-ui/icons/Payment';
import swal from 'sweetalert';
import firebase from 'firebase';
import axios from 'axios';

class Menu extends Component{
        constructor(props){
        super(props);
            this.state = {
            itemName:'',
            price:'',  
            redirect: false
            
         };  

  }

      componentDidMount(){
            this.setState({
                isloading:false
            })
            axios.get(`https://homefooddelivery-3e93e.firebaseio.com/cart.json`)
            .then(db =>{

                if(db.data === null){
                    this.setState({
                        empty:true
                    })
                }
                else{
             console.log("data::" +db.data)
             const res = db.data;
             
        
             let board= Object.values(res);
             console.log(board)
             for(let i = 0;i<board.length;i++){
                 const BName = board[i].Name;
                 console.log("bname:"+BName);
                    this.setState({
                        nameOfBoard:board,
                     })
                    }
                }
            })          
    } 
  



        pod(){
                 swal("Please Enter Your Address:", 
                {
                        content: "input"
                })
                .then((value,itemName) => {
                        swal(`You Delivery Address: ${value}
                                Your order will be delivered on your address
                                Thank You
                                Order Details: Your order no is 12211221
                                Bill Details: RS 300
                                Final Payment: RS 300`);
                        // swal({icon:"success"});
                                
                });

        }
        render(){

                return (
                <nav className="navbar navbar-light bg-transperent">
                        
                        <form className="form-inline">
                        <button className="btn btn-outline-success" type="button"> <CreditCardIcon/> Debit/Credit Card</button>
                        <button className="btn btn-outline-secondary" type="button" style={{background:"#1f9f7c", color:"white"}} disabled><RecentActorsIcon/>UPI</button>
                        <button className="btn btn-outline-secondary" type="button" style={{background:"#1f9f7c", color:"white"}} disabled><PaymentIcon/> Credit</button>
                        <button className="btn btn-outline-secondary" type="button" style={{background:"#1f9f7c", color:"white"}} disabled><AccountBalanceWalletIcon/>Wallets</button>
                        <button className="btn btn-outline-secondary" type="button" style={{background:"#1f9f7c", color:"white"}}disabled><AccountBalanceIcon/>Netbanking</button>
                        <button className="btn btn-outline-secondary" type="button" style={{background:"#1f9f7c", color:"white"}}disabled><RedeemIcon/>Food Cards</button>
                        <button className="btn btn-outline-success" type="button" onClick={this.pod}><ReceiptIcon/>Pay on Delivery</button>
                        </form>

                        <h5 className="title">We accept </h5>
                        
                        <img src={visa} alt="visa" width="50px"/>
                        <img src={rupay} alt="rupay" width="50px"/>
                        <img src={mestro} alt="mestro" width="50px"/>
                        <img src={AX} alt="AX" width="50px"/>
                        <img src={zeto} alt="zeto" width="50px"/>
                </nav>
                )
        }
}

export default Menu;