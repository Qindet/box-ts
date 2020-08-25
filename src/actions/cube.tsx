import {IDeleteItem,IAddItem} from "../interfaces";
import {ADD_RED_ITEM_EDGE,DELETE_RED_ITEM_EDGE} from "./types";


 export const addRedItem:IAddItem = (payload) => {
    return {
        type: ADD_RED_ITEM_EDGE,
        payload
    }
}

export const deleteRedItem:IDeleteItem = (payload) => {
    return {
        type: DELETE_RED_ITEM_EDGE,
        payload
    }
}