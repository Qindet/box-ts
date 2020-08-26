import {addRedItem,deleteRedItem} from '../actions/cube'
import {TodoItemType} from "../ts-types/main-types";



const dispatchHelper = (id:number): Array<any> => {
    if (id === 1) {
        return [addRedItem,deleteRedItem]
    }
    return [addRedItem,deleteRedItem]
}

export default dispatchHelper
