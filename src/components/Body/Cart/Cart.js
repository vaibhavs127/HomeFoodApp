import React from 'react';
import './Cart.css';
import Axios from 'axios';
import Cartdata from './cartdata/Cartdata';
import Icon from '@mdi/react';
import { mdiCurrencyInr } from '@mdi/js';
import {Redirect, Link} from "react-router-dom";
// import {connect} from 'react-redux';


class Cart extends React.Component {
    constructor(props){
        // alert('constructor')
        super(props)
        this.state={
            cart:[],
            totalPrice:0,
            redirect: false
        }
    }
    componentDidMount() {
        this.props.onRef(this)
        Axios.get('https://homefooddelivery-3e93e.firebaseio.com/cart.json')
        .then((res)=>{
                res.data===null?this.state.cart=[]:this.state.cart=res.data;
                this.setState({
                cart:this.state.cart
            })
            // console.log(this.state.cart)
            this.state.cart.map(e=>{
                this.state.totalPrice=this.state.totalPrice+e.price
                this.setState({totalPrice:this.state.totalPrice})
            })
    })
    }
    
    componentWillUnmount() {
        this.props.onRef(undefined)
    }
     method=()=>{
        Axios.get('https://homefooddelivery-3e93e.firebaseio.com/cart.json')
        .then((res)=>{
                res.data===null?this.state.cart=[]:this.state.cart=res.data;
                this.setState({
                cart:this.state.cart
            })
            this.setState({totalPrice:0})
            this.state.cart.map(e=>{
                this.state.totalPrice=this.state.totalPrice+e.price
                this.setState({totalPrice:this.state.totalPrice})
            })
    })
    }
    // totalPriceHandler=()=>{

    // }
    render(){
         const { redirect } = this.state;
    if (redirect) {
       return <Redirect to='/Payment'/>;
     }
    //    alert('in render')
        return (
            
            <div className="cart">
                <div id="cartHeading">
                    Cart
                </div>
                
                {
                     this.state.cart.length? 
                     <div>
                        {this.state.cart.map((e=><Cartdata key={e.id} item={e}/>))}
                        <div id="total"><div>Total   | 
                             <Icon path={mdiCurrencyInr}
                                title="User Profile"
                                size={0.7} 
                                color="black"/>
                                <span style={{color:"black"}}><b>{this.state.totalPrice}</b></span>
                                </div>
                                
                        </div>
                      </div>    
                     : 
                      <div id="emptyCart">Cart is Empty</div>     
                }
                <div><Link className="order" to="/Payment">Order Your Food</Link></div>
                
            </div>
        );
    }
}

// export default connect(mapStateToProps,null)(Cart);
export default Cart;
