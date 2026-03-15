import {configureStore} from "@reduxjs/toolkit";
import { PostReducer } from "./reducers/PostReducer";



const initialState={
    post:{
        posts:[],
        loading:false,
        error:null
    }
}

export const Store=configureStore({

    reducer:{
        post:PostReducer,
    },
    preloadedState:initialState,

})