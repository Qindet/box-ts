import React, {FC, useReducer} from 'react'
import {ContextApp, initialState, testReducer} from "../reducer";

import Nav from "./nav/nav";
import {BrowserRouter} from 'react-router-dom'
import EdgeList from "./edge-list/edge-list";
const App:FC = () => {
    const [state, dispatch] = useReducer(testReducer, initialState);

    return (

        <ContextApp.Provider value={{dispatch, state}}>
            <BrowserRouter>
                <Nav />
                <EdgeList/>
            </BrowserRouter>

        </ContextApp.Provider>
    )
}

export default App