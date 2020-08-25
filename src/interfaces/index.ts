
export interface IState {
    todos: Array<IItemEdge>
}

export interface IAction {
    type: string,
    payload: any
}

export interface IItemEdge {
    type: string,
    todo: string,
    id: number
}
export interface IPayloadDelete {
    id: number
}

export interface IAddItem {
    (payload:IItemEdge):IAction
}

export interface IDeleteItem {
    (payload:IPayloadDelete):IAction
}

export interface IFuncDel {
    onDelete:(id:IPayloadDelete)=>void
}

export interface IEdgeListItem {
    item: IItemEdge,
    onDelete:IFuncDel
}