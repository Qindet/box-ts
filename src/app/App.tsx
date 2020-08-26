import React, {FC, useReducer} from 'react'
import {ContextApp, initialState, testReducer} from "../reducer";

import Nav from "./nav/nav";
import {BrowserRouter,Route} from 'react-router-dom'
import EdgeList from "./edge-list/edge-list";
import Cube from "./cube/cube";

const App:FC = () => {
    const [state, dispatch] = useReducer(testReducer, initialState);



    return (

        <ContextApp.Provider value={{dispatch, state}}>
            <BrowserRouter>
                <Nav />
                <Route path="/" component={Cube} exact/>
                <Route path="/edge/:id" render={({match})=>
                {
                    const {id} = match.params
                    return <EdgeList id={id}/>}}
                />
                {/*<EdgeList/>*/}
            </BrowserRouter>

        </ContextApp.Provider>
    )
}

export default App