import {ADD_RED_ITEM_EDGE, DELETE_RED_ITEM_EDGE} from "../actions/types";
import {TodoItemType} from "./main-types"

// export type ActionCreatorsType = AddRedItemActionCreatorType | DeleteRedItemActionCreatorType

// export type PayloadActions = TodoItemType  | number
export type AddRedItemActionCreatorType = (payload:TodoItemType) => AddRedItemActionType
export type AddRedItemActionType = {
    type: typeof ADD_RED_ITEM_EDGE,
    payload: TodoItemType
}
export type DeleteRedItemActionCreatorType = (payload:number) => DeleteRedItemActionType
export type DeleteRedItemActionType = {
    type: typeof DELETE_RED_ITEM_EDGE,
    payload: number
}
