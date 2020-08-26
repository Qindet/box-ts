
import {ADD_RED_ITEM_EDGE,DELETE_RED_ITEM_EDGE} from "./types";
import {TodoItemType} from "../ts-types/main-types";
import {AddRedItemActionType, DeleteRedItemActionType} from "../ts-types/action-types";



 export const addRedItem = (payload:TodoItemType): AddRedItemActionType => {
    return {
        type: ADD_RED_ITEM_EDGE,
        payload
    }
}

export const deleteRedItem = (payload:number): DeleteRedItemActionType => {
    return {
        type: DELETE_RED_ITEM_EDGE,
        payload
    }
}