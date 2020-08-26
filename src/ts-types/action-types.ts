import {ADD_RED_ITEM_EDGE, DELETE_RED_ITEM_EDGE} from "../actions/types";
import {TodoItemType} from "./main-types"

export type AddRedItemActionType = {
    type: typeof ADD_RED_ITEM_EDGE,
    payload: TodoItemType
}
export type DeleteRedItemActionType = {
    type: typeof DELETE_RED_ITEM_EDGE,
    payload: number
}
