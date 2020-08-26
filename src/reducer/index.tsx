import React from "react";

import {ADD_RED_ITEM_EDGE, DELETE_RED_ITEM_EDGE} from "../actions/types";
import {InitialStateType} from "../ts-types/main-types";
// @ts-ignore
export const ContextApp = React.createContext();



export const initialState: InitialStateType = {
    redTodos: {
        id:1,
        todos:[{type:'juyj',todo:'1',id:5435435}]
    },
    blueTodos: {
        id:2,
        todos:[{type:'juyj',todo:'2',id:5435435}]
    }
}

export const testReducer = (state:InitialStateType, action:any): InitialStateType => {
    switch(action.type) {
        case ADD_RED_ITEM_EDGE:
            return {
                ...state,
                redTodos: {...state.redTodos,todos:[...state.redTodos.todos,action.payload]}
            }
        case DELETE_RED_ITEM_EDGE:
            const idx:number = state.redTodos.todos.findIndex(i=>i.id===action.payload)
            const newItems = [...state.redTodos.todos.slice(0,idx),...state.redTodos.todos.slice(idx+1)]
            return {
                ...state,
                redTodos:  {...state.redTodos,todos:newItems}
            }
        default:
            return state
    }
};