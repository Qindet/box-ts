import {addRedItem,deleteRedItem} from '../actions/cube'
import {TodoItemType} from "../ts-types/main-types";

type DispatchFuncType = {
    (payload:TodoItemType):object
}

const dispatchHelper = (id:number): Array<any> => {
    if (id === 1) {
        return [addRedItem,deleteRedItem]
    }
    return []
}

export default dispatchHelper
