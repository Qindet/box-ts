import React, {useReducer} from 'react'
import {ContextApp, initialState, testReducer} from "../reducer";
import ListBox from "../list-box";

const App = () => {
    const [state, dispatch] = useReducer(testReducer, initialState);

    return (

        <ContextApp.Provider value={{dispatch, state}}>
            <ListBox/>
        </ContextApp.Provider>
    )
}

export default App