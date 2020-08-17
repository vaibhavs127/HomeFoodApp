// import addItemAction from '../Action/addItemAction'
const initialState={
    items:0,
    cartdata:{}

    // categoryModal:false,
    // cartModal:false
}

const rootReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'ADD_ITEM':
            
            // if(state.cartdata.length>0)
            // {       
            //     // console.log(state.cartdata.length) 
            //         state.cartdata.map((ele)=>{
            //         console.log(ele.itemName)
            //         if(ele.itemName==action.payload.itemName)
            //         {
            //             ele.NoOfItems++;
            //             return{
            //                 ...state,
            //                 cartdata:state.cartdata
            //             }
            //         }
            //     })    
            // }
            // // console.log( state.cartdata)
            // else{
                // state.cartdata.push(action.payload)
                // console.log(state.cartdata)
                // console.log(state.cartdata)
                return{
                ...state,
                cartdata:action.payload
                
            }
            
            
            

        case 'REMOVE_ITEM':return{
            ...state,
            items:state.items-1
        }
        // case 'CATEGORY_MODAL':return{
        //     ...state,
        //     categoryModal:!(state.categoryModal)
        // }
        // case 'CART_MODAL':return{
        //     ...state,
        //     cartModal:!state.cartModal
        // }
        default:return state
    }
}

export default rootReducer