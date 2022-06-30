import { legacy_createStore , compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { reducer } from "./Reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const customMiddleware=(store)=>(next)=>(action)=>{
//     if(typeof action==="function"){
//         return(next(store.dispatch))
//     }
//     return next(action)
// }
export const store=legacy_createStore(reducer,composeEnhancers(applyMiddleware(thunk)))