import React from "react";
import {NavLink,useParams} from 'react-router-dom'

const Cube = () => {

    return <>
        <ul>
            <li><NavLink to="edge/1">Red edge</NavLink></li>
            <li><NavLink to="edge/2">Blue edge</NavLink></li>
            <li><NavLink to="edge/3">Green edge</NavLink></li>
            <li><NavLink to="edge/4">Yellow edge</NavLink></li>
        </ul>
        </>
}

export default Cube