import React from 'react';
import './Card.css';
import { mdiCurrencyInr } from '@mdi/js';
import Icon from '@mdi/react'
// import {connect} from 'react-redux';
// import {addItem,removeItem} from '../../../Redux/Action/Actions'
// import {addItem} from '../../../Redux/Action/addItemAction';
// import {removeItem} from '../../../Redux/Action/removeItemAction';
// import Axios from 'axios';
class Card extends React.Component {
    constructor(props){
        super(props)  
        this.state={
            carts:[]
        }
    }
    
  // Removing item from cart
   
    // RemoveHandler = (item) => {
        
    //     this.setState({
    //         ...this.state,
    //         NoOfItems:this.state.NoOfItems-1
    //     })
    //     alert("You have Removed the item");
    //     alert(`no of items are${this.state.NoOfItems}`)
    // }
 
  
    render(){
        return (
            <div className="card">
                
                <div className="container">

                    <img id="imageCard" src={this.props.Image} alt=""></img>

                    <div className="nameOfCuisine">
                            <div><b>{this.props.itemName}</b> </div>
                            <span style={{fontSize:"12px",marginLeft:"5px"}}> ({this.props.VegOrNonVeg})</span>
                            {/* <br/> */}
                        
                    </div>
                    <div id="Info">{this.props.Info}</div>
                    <div className="price">
                        <Icon path={mdiCurrencyInr}
                            title="User Profile"
                            size={0.8} 
                            color="black"
                            />
                        <div style={{fontSize:"15px"}}>{this.props.price}</div>
                        
                        
                        <div className="buttons">
                            <button onClick={()=>this.props.RemoveHandler(this.props.id, this.props.itemName,this.props.unit, this.props.price)} id="MinusButton">-</button>
                            <button 
                             onClick={()=>this.props.AddHandler(this.props.id, this.props.itemName,this.props.unit, this.props.price)}
                             id="Add">Add
                             
                            </button>
                            <button onClick={()=>this.props.AddHandler(this.props.id, this.props.itemName,this.props.unit, this.props.price)} id="PlusButton">+</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapStateToProps=()=>{

// }
// const mapDispatchToProps=(dispatch)=>{
//     return{
//         addItem:(cart)=>dispatch(addItem(cart)),
//         // removeItem:()=>dispatch(removeItem())
//     }
// }
// export default connect(null,mapDispatchToProps)(Card);
export default Card;
