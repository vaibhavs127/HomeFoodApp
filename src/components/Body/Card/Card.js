import React from 'react';
import './Card.css';
import { mdiCurrencyInr } from '@mdi/js';
import Icon from '@mdi/react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import {connect} from 'react-redux';
// import {addItem,removeItem} from '../../../Redux/Action/Actions'
// import {addItem} from '../../../Redux/Action/addItemAction';
// import {removeItem} from '../../../Redux/Action/removeItemAction';
// import Axios from 'axios';
class card extends React.Component {
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
            <div>
                <Card style={{ width: '13rem' , height:'18rem' ,marginLeft:"30px",background:"white", marginTop:"120px" }}>
                    <Card.Img variant="top" src={this.props.Image}   height="110px"/>
                        <Card.Body >
                            <Card.Title style={{marginLeft:"-210px" ,marginTop:"100px"}}><b>{this.props.itemName}</b></Card.Title>
                            <Card.Text style={{marginLeft:"-210px" ,marginTop:"5px"}}>{this.props.VegOrNonVeg}</Card.Text>
                            <Card.Text style={{marginLeft:"-210px" ,marginTop:"5px"}}>{this.props.Info}</Card.Text>
                            <Card.Text style={{marginLeft:"-210px" ,marginTop:"5px"}}>Price: {this.props.price}</Card.Text>
                        </Card.Body>
                </Card>
                    <div style={{marginLeft:"60px", marginTop:"20px"}}>
                        <Button onClick={()=>this.props.RemoveHandler(this.props.id, this.props.itemName,this.props.unit, this.props.price)} >-</Button>
                        <Button onClick={()=>this.props.AddHandler(this.props.id, this.props.itemName,this.props.unit, this.props.price)}>Add</Button>
                        <Button onClick={()=>this.props.AddHandler(this.props.id, this.props.itemName,this.props.unit, this.props.price)} >+</Button>
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
export default card;
