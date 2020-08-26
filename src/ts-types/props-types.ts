
import {TodoItemType} from "./main-types";

export type EdgeListItemPropsType = {
    item: TodoItemType,
    onDelete: (id:number)=>void
}

export type EdgeListPropsType = {
    id: number
}