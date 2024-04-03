import {composeWithDevTools} from '@redux-devtools/extension';
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from './reducers/Index'
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './reducers/ProductSlice';
import authenticateReducer from './reducers/AuthentiacteReducer';

// 기존의 createStore는 combineReducer를 통해 합친 reducer를 store에 전달해서 rootReducer로 받아옴
// thunk, applyMiddleware, composeWithDevTools -> configureStore에 자동으로 포함되어 있음
// 즉, 이제 combineReducer가 필요가 없다!
// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer
    }
})

export default store