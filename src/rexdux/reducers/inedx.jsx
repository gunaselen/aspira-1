import { combineReducers } from "redux";
import { productReducer , selectproductReducer} from "./productReducers";

  const reducers = combineReducers({
    allproducts:productReducer,
    product:selectproductReducer,
})

export default reducers;    