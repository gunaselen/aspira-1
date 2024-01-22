import axios from "axios";
import { ActionTypes } from "../contants/action-types";
import apiURL from "../../apis/basURL";
import { useNavigate } from "react-router-dom";

// export const fetchProdcts = (data)=> 
//     async  (dispatch) => {
//         const response =  await apiURL.post(`/login/${data}`);
//         dispatch({type:ActionTypes.FETCH_PRODCTS , payload: response.data})
//     }
    

    

    export const fetchProdcts = (data) => async (dispatch) => {
        const navigate = useNavigate()
        try {
          const response = await apiURL.post(`/login`, data);
          dispatch({ type: ActionTypes.FETCH_PRODCTS, payload: response.data });
          const token = response.data.token;
      
          dispatch({ type: ActionTypes.SET_TOKEN, payload: token });
    
          navigate("/");
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };


// export const setProducts =(Products)=> {
//     return {
//         type:ActionTypes.SET_PRODUCTS,
//         payload:Products
//     };
// };

// export const selectedProducts =(Product)=> {
//     return {
//         type:ActionTypes.SELECTED_PRODUCT,
//         payload:Product
//     };
// };\



export const increment =(data)=>{
  console.log("incrementAction :",data)
    return(
    {type: ActionTypes.INCREMENT, requestData:data }
    )
}
export const decrement =(data)=>{
    return(
        {type: ActionTypes.DECREMENT, requestData:data }
        )
}