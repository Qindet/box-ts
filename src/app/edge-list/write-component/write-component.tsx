import React, {FC, FormEvent, useContext, useState} from "react";
import {ContextApp} from "../../../reducer";
import {addRedItem} from "../../../actions/cube";
import {WriteComponentPropsType} from "../../../ts-types/props-types";
import {TodoItemType} from "../../../ts-types/main-types";


const WriteComponent:FC<WriteComponentPropsType> = ({onAdd}) => {
    const [type,setType] = useState<string>('')
    const [todo,setTodo] = useState<string>('')
    const {state, dispatch} = useContext(ContextApp)
    const submitHelper = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const item:TodoItemType = {
            type,
            todo,
            id:Date.now()
        }

        onAdd(item)
    }
    return <>
        <form onSubmit={e=>submitHelper(e)}
            className="col s12">
            <div className="row">
                <div className="input-field col s6">
                    <input value={type} onChange={e=>setType(e.target.value)}
                        placeholder="Placeholder" id="first_name" type="text" className="validate"/>
                </div>
                <div className="input-field col s6">
                    <input value={todo} onChange={e=>setTodo(e.target.value)}
                        id="last_name" type="text" className="validate"/>
                </div>
            </div>
            <button className="btn">Submit</button>
        </form>
        </>
}

export default WriteComponent