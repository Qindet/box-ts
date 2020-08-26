import React, {FC, useContext} from "react";
import {ContextApp} from "../../reducer";
import WriteComponent from "./write-component/write-component";


import EdgeListItem from "./edge-list-item/edge-list-item";
import { deleteRedItem} from "../../actions/cube";
import { TodoItemType} from "../../ts-types/main-types";
import {EdgeListPropsType} from "../../ts-types/props-types";
import dispatchHelper from "../../utils/dispatch-helper";

function todosSelector(state:any,items:Array<string>,id:number) {  /// <- state need to fix

    const todoItem: any= items.find((item) => {  /// <- any fix
        if (state[item].id === id) {
            return state[item].todos
        }
    })
    return [...state[todoItem].todos]
}

const EdgeList:FC<EdgeListPropsType> = ({id}) => {

    const {state, dispatch} = useContext(ContextApp)
    const items: Array<TodoItemType> = todosSelector(state,Object.keys(state),+id)
    const [addItem,deleteItem]:Array<any> = dispatchHelper(+id)
    const onDelete = (id:number) => {
        dispatch(deleteItem(id))
    }
    const onAdd = (item:TodoItemType) => {
        dispatch(addItem(id))
        // localStorage.setItem(id.toString(),JSON.stringify(item))

    }

    return (
        <div>
            <WriteComponent onAdd={(item)=>onAdd(item)}/>
                {items?items.map(item=><EdgeListItem onDelete={onDelete}
                key={item.id} item={item} />):null}
        </div>
    )
}

export default EdgeList