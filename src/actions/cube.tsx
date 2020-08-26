
import {ADD_RED_ITEM_EDGE,DELETE_RED_ITEM_EDGE} from "./types";
import {TodoItemType} from "../ts-types/main-types";
import {
    AddRedItemActionCreatorType,
    AddRedItemActionType,
    DeleteRedItemActionCreatorType,
    DeleteRedItemActionType
} from "../ts-types/action-types";


 export const addRedItem:AddRedItemActionCreatorType = (payload) => {
    return {
        type: ADD_RED_ITEM_EDGE,
        payload
    }
}

export const deleteRedItem:DeleteRedItemActionCreatorType = (payload) => {
    return {
        type: DELETE_RED_ITEM_EDGE,
        payload
    }
}