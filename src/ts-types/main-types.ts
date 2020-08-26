export type TodoItemType = {
    type: string,
    todo: string,
    id: number
}

export type EdgeItemType = {
    id: number,
    todos: Array<TodoItemType>
}

export type InitialStateType = {
    redTodos: EdgeItemType ,
    blueTodos: EdgeItemType
}