import React, {useContext} from "react";
import {ContextApp} from "../reducer";

const ListBox = (props: any) => {
    const {state, dispatch} = useContext(ContextApp);


    return (
        <div>
            <button onClick={
                () => dispatch({type: 'test_update',payload:'test'})
            }>click</button>
            {JSON.stringify(state)}
        </div>
    )
}

export default ListBox