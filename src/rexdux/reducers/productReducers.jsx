import { ActionTypes } from "../contants/action-types";


const initialState={
    products:[],
};


export const    productReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:payload};

            case ActionTypes.FETCH_PRODCTS:
                return {...state, products:payload};
        
        default:
            return state;
    }   

};


export const    selectproductReducer = (state = initialState, {type, payload}) =>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, ...payload};
        
        default:
            return state;
    }   

}


