import React from 'react';
import './Body.css';
import Categories from "./Categories/Categories";
import Cuisines from "./Cuisines/Cuisines";
import Cart from "./Cart/Cart";
import Axios from 'axios';
import HotelInfo from '.././Header/HotelInfo';

class Body extends React.Component {    
    constructor(){
        super()
        this.state={
            cart:[]
        }
    }
    
   updatehandler=(product)=>{
        this.setState({
            cart:product       
        })
        //uploading cart data to firebase
        product===null?
        Axios.delete('https://homefooddelivery-3e93e.firebaseio.com/cart.json')
        :
        Axios.put('https://homefooddelivery-3e93e.firebaseio.com/cart.json',product)
        .then(response=>console.log(response))
        .catch(e=>console.log(e))
        // alert('posted')
        this.onClick();
    }
     onClick=()=>{
        setTimeout(() => {
            this.child.method()
        }, 2000);
    }
    componentDidMount() {
    
        Axios.get('https://homefooddelivery-3e93e.firebaseio.com/cart.json')
        .then((res)=>{
                res.data===null?this.state.cart=[]:this.state.cart=res.data;
                this.setState({
                cart:this.state.cart
            })
            console.log(this.state.cart)
        })
    }
    
    render(){
        return (
            <div>
            <HotelInfo/>
                <div className="MainContainer">
                    <div className="CategoryCart">
                        <Categories/>
                        <Cart onRef={ref => (this.child = ref)} cart={this.state.cart}/>
                    </div>
                    <div className="cuisineContainer">
                        <Cuisines cart={this.state.cart} updatehandler={this.updatehandler} Removehandler={this.RemoveHandler} Addhandler={this.AddHandler}/> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
