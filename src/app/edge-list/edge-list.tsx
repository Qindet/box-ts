import React, {FC, useContext} from "react";
import {ContextApp} from "../../reducer";
import WriteComponent from "./write-component/write-component";

import {IFuncDel, IItemEdge, IPayloadDelete} from "../../interfaces";
import EdgeListItem from "./edge-list-item/edge-list-item";
import {deleteRedItem} from "../../actions/cube";

const EdgeList:FC = () => {
    const {state, dispatch} = useContext(ContextApp);
    const [...items]:IItemEdge[] = state.todos
    const onDelete:IFuncDel = (id) => {
     dispatch(deleteRedItem(id))
    }
    return (
        <div>
            <WriteComponent/>
            {items.map(item=><EdgeListItem onDelete={onDelete}
                key={item.id} item={item} />)}
        </div>
    )
}

export default EdgeList