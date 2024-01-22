import { ActionTypes } from "../contants/action-types";


const initialState={
    products:[],
    counterValue:0
};


export const    productReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
            case ActionTypes.INCREMENT:
                console.log("INCpayload :",payload)
                return {...state, counterValue:1};
              
                case ActionTypes.DECREMENT:
                console.log("DECpayload :",payload)

                return {...state, counterValue:1};
        
        default:
            return state;
    }   

};


// export const    selectproductReducer = (state = initialState, {type, payload}) =>{
//     switch (type) {
//         case ActionTypes.SET_PRODUCTS:
//             return {...state, ...payload};
        
//         default:
//             return state;
//     }   

// }


