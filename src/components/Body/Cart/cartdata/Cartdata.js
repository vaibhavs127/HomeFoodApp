import React from 'react';
import './Cartdata.css'
import Icon from '@mdi/react';
import { mdiCurrencyInr } from '@mdi/js';

class Cartdata extends React.Component{

    constructor(props){
        super(props)
        this.state={
            // totalPrice:0
        }
    }
    render(){
        return(
            <div className="cartContainer">
                <div className="cartItems">
                    <div id="itemName">
                        {this.props.item.itemName}
                    </div>
                    <div id="unit">
                        {this.props.item.unit}
                    </div>
                </div>    
                <div id="price">
                    <Icon path={mdiCurrencyInr}
                            title="User Profile"
                            size={0.6} 
                            color="white"
                            />
                    {this.props.item.price}
                </div>
                {/* <div id="total">Total</div> */}
            </div>
        );
    }

}
export default Cartdata;