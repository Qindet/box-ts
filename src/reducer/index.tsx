import React from "react";
import {IAction, IItemEdge, IState} from "../interfaces";
import {ADD_RED_ITEM_EDGE, DELETE_RED_ITEM_EDGE} from "../actions/types";
// @ts-ignore
export const ContextApp = React.createContext();

export const initialState: IState = {
    todos: [{type:'juyj',todo:'dsd',id:5435435}]
};

export const testReducer = (state: IState, action: IAction) => {
    switch(action.type) {
        case ADD_RED_ITEM_EDGE:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_RED_ITEM_EDGE:
            const idx:number = state.todos.findIndex(i=>i.id===action.payload)
            const newItems:IItemEdge[] = [...state.todos.slice(0,idx),...state.todos.slice(idx+1)]
            return {
                ...state,
                todos: newItems
            }
        default:
            return state
    }
};