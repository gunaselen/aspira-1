import { combineReducers } from "redux";
import { productReducer } from "./productReducers";

  const reducers = combineReducers({
    allproducts:productReducer,
    // product:selectproductReducer,
})

export default reducers;    