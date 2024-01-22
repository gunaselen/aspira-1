import axios from "axios";
import { ActionTypes } from "../contants/action-types";
import apiURL from "../../apis/apiURL";

export const fetchProdcts = ()=> 
    async  (dispatch) => {
        const response =  await apiURL.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODCTS , payload: response.data})
    }
    
  
    


export const setProducts =(Products)=> {
    return {
        type:ActionTypes.SET_PRODUCTS,
        payload:Products
    };
};

export const selectedProducts =(Product)=> {
    return {
        type:ActionTypes.SELECTED_PRODUCT,
        payload:Product
    };
};