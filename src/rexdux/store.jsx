import { applyMiddleware, compose, createStore } from "redux";
import reducers from "./reducers/combineReducer";
import { thunk } from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     reducers,
//     composeEnhancers(applyMiddleware(thunk))
//     )

let initialState = {}

// const middleware = [createdMW,thunk]

    //  const storeConfig= () =>
        
    //     createStore(
    //         reducers,
    //         initialState
    //         )

            const storeConfig = createStore(()=>reducers, {});



     
export default storeConfig;

