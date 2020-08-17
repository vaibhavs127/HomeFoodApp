import React from 'react';
import './Categories.css';
import Axios from 'axios';
// import { connect } from 'react-redux';


class Categories extends React.Component {
    constructor(){
        super()
        this.state={
            list:[],
            categoriesData:[],
            // res_id:16774318,
            categoryModal:false
        }
    }
    
    componentDidMount(){
        var res_id=16774318;
       const url=`https://developers.zomato.com/api/v2.1/categories?res_id=${res_id}&apikey=86155078d8848f8713dd8eaacbd034fa`
        Axios.get(url)
        .then((response)=>{
            //console.log(response.data)
            this.setState({
                ...this.state,
            categoriesData:response.data.categories
            })
        })
        .catch((e)=>console.log(e.message))
    }
    
    render(){
        return (
            <React.Fragment>
               
                <div className="categories">
                    <div id="heading">Categories</div>
                    <div id="listOfCategories">
                        {this.state.categoriesData.map((ele) => <li key={ele.categories.id}>{ele.categories.name}</li>)}
                    </div>
                </div>
                
            </React.Fragment>
        );
}
}
// const mapStateToProps =(state)=>{
//     return{
        
//         categoryModal:state.categoryModal
//     }
// }

export default Categories;
// export default connect(mapStateToProps)( Categories);
