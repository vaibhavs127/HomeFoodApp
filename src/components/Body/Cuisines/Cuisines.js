import React from 'react';
import './Cuisines.css';
import Card from "../Card/Card";
import Axios from 'axios';

// import CardContent from '@material-ui/core/CardContent';
// import { connect } from 'react-redux';
// import showcategory from '../../../Redux/Action/categoryAction';

class Cuisines extends React.Component {
constructor(props){
    super(props)
    this.state={
        carts:[],
        cuisine:[],
        totalPrice:0,
        showallcusine:true,
        showsearchedcuisine:false,
        targetvalue:"",
        vegonly:false
    }
}
componentDidMount() {
    // this.props.onRef(this);
    Axios.get('https://homefooddelivery-3e93e.firebaseio.com/cuisine.json')
    .then((response)=>{
        // console.log(response)
        this.state.cuisine.push(response.data)
        this.setState({
            cuisine:this.state.cuisine[0]
        })
    })
    .catch((e)=>console.log("error messag"));


    Axios.get('https://homefooddelivery-3e93e.firebaseio.com/cart.json')
    .then((res)=>{
            res.data===null?this.state.carts=[]:this.state.carts=res.data;
            this.setState({
            carts:this.state.carts
        })
        console.log(this.state.carts)
        // console.log(this.state.carts.length)
    })

}

AddHandler = (id,Name,unit,price) => {
          
    alert('item added')
    
    var index=-1;
    var i;
    
    
        for( i=0;i<this.state.carts.length;i++)
        {
            if(this.state.carts[i].id===id)
            {
                // console.log(i)
                this.state.carts[i].unit++;
                index=i;
                // alert('matched')
                break;
            }
        }
    
    if(index>=0)
    {   
        this.state.carts.splice(index,1,{id:id,itemName:Name,unit:this.state.carts[index].unit,price:price*this.state.carts[index].unit})
    }
    if(this.state.carts.length===0 || i==this.state.carts.length)
    {   
        this.state.carts.push({id:id,itemName:Name,unit:unit, price:price*unit})
        this.setState({
            carts:this.state.carts
        })
    }
    this.props.updatehandler(this.state.carts,)
    
}

RemoveHandler = (id,Name,unit,price) => {
          
    var index=-1;
    var i;
    for(i=0;i<this.state.carts.length;i++)
    {
        if(this.state.carts[i].id===id)
        {
            // console.log(i)
            this.state.carts[i].unit--;
            index=i;
            break;
        }
    }
    
    if(index>=0)
    {
        if(this.state.carts[index].unit===0)
        {
            this.state.carts.splice(index,1)
            this.setState({
                carts:this.state.carts
            })
            alert('item removed')
            if(this.state.carts.length===0){
                this.props.updatehandler(null)
               return;
            }
        }
        else
        {   
            this.state.carts.splice(index,1,{id:id,itemName:Name,unit:this.state.carts[index].unit,price:price*this.state.carts[index].unit})
        }
        
    }
    else if(this.state.carts.length===0 || i===this.state.carts.length)
    {
        alert('Selected Item Not Present in Cart')
        return;
    }
    this.props.updatehandler(this.state.carts)

}

    searchhandler=(e)=>{
        // console.log(document.querySelector('#VegCheckbox').checked)
        // console.log(e.target.value)
        // console.log(e.target.value)
        let count=0;
        (this.state.cuisine.map((item,key)=>{
            console.log( item.Name.startsWith(e.target.value))
            if(item.Name.toLowerCase().startsWith(`${e.target.value}`))
            {   count++;
                this.setState({showallcusine:false})
                this.setState({showsearchedcuisine:true})
                this.setState({targetvalue:e.target.value.toLowerCase()})
            }  
        }
        ))
        if(count==0){this.setState({showallcusine:true,showsearchedcuisine:false})}
            // if(this.state.showallcusine){
            // alert('Item not found')
            // }
        
}
check=()=>{
    let checked = document.querySelector('#VegCheckbox').checked
    if(checked)
    {   
        // this.state.vegonly=true
        this.setState({
             ...this.state,
             vegonly:true,
             showallcusine:false
            })   
    
        }
    else
    {
        // this.state.vegonly=false
        this.setState({
            ...this.state,
            vegonly:false,
            showallcusine:true
        })
    }
    console.log(this.state.vegonly)   
       
    
}
   
    
    render(){
        return (
            <React.Fragment>
                <div className="SearchVegFavContainer">
                        <div className="SearchBar">
                            <input id="SearchDishes" onKeyUp={this.searchhandler} type="text" placeholder="Search for dishes..."></input>
                        </div>
                        <div className="Vegbox">
                            <input onClick ={this.check} id="VegCheckbox" type="checkbox"/>Veg Only
                        </div>
                        
                </div>

                <div className="cuisine">
                    {this.state.showallcusine?
                    (this.state.cuisine.map((item,key)=><Card 
                    key={key}
                    id={item.id} 
                    Info={item.Info} 
                    VegOrNonVeg={item.VegOrNonVeg} 
                    Image={item.Image} 
                    itemName={item.Name} 
                    price={item.Price}
                    unit={item.unit}
                    RemoveHandler={this.RemoveHandler}
                    AddHandler={this.AddHandler}>
                    </Card>)):null}
                </div>

                <div className="selectedCuisine">
                    {   this.state.showsearchedcuisine?
                        this.state.cuisine.map((item,key)=>{
                        if(item.Name.toLowerCase().startsWith(`${this.state.targetvalue}`))
                        {
                        return    <Card 
                            key={key}
                            id={item.id} 
                            Info={item.Info} 
                            VegOrNonVeg={item.VegOrNonVeg} 
                            Image={item.Image} 
                            itemName={item.Name} 
                            price={item.Price}
                            unit={item.unit}
                            RemoveHandler={this.RemoveHandler}
                            AddHandler={this.AddHandler}/>
                        }
                    }
                    ):null
                    }
                </div>
                
                <div className="cuisine">
                    {this.state.vegonly?
                    (this.state.cuisine.map((item,key)=>
                    {   if(item.VegOrNonVeg=='Veg')
                        {
                    return <Card 
                        key={key}
                        id={item.id} 
                        Info={item.Info} 
                        VegOrNonVeg={item.VegOrNonVeg} 
                        Image={item.Image} 
                        itemName={item.Name} 
                        price={item.Price}
                        unit={item.unit}
                        RemoveHandler={this.RemoveHandler}
                        AddHandler={this.AddHandler}/>
                        }
                    })):null}
                </div>
            </React.Fragment>
        );
    }
}

// const mapStateToProps =(state)=>{
//     return{
//         items:state.items,
//         categoryModal:state.categoryModal
//     }
// }
// const mapDispatchToProps =(dispatch)=>{
//     return{
//         showcategory:()=> dispatch(showcategory())        
//     }
// }
export default Cuisines;
// export default connect(mapStateToProps,mapDispatchToProps)( Cuisines );
