import { configureStore, createSlice } from "@reduxjs/toolkit";


let data=[{}];

const displayComment=false

const commentsData=[];

const redux=createSlice({
    name:'data',
    initialState:{data,commentsData},
    reducers:{
        getData(state,action){
            state.data=[...action.payload]
        },
        getComment(state){
        state.displayComment=!state.displayComment
        },
        getCommentData(state,action){
            state.commentsData=[...action.payload]
        }
    }
})

export const actions=redux.actions;

const store=configureStore({
    reducer:redux.reducer
})

export default store;
