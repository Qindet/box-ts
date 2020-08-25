import React from "react";
import {NavLink} from 'react-router-dom'
const Nav = () => {
    return <>
        <nav>
            <div className="nav-wrapper blue darken-2">
                <NavLink to='/' className="brand-logo center">TypeScript</NavLink>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to="/cubes">Cubes</NavLink></li>
                    <li><NavLink to="/edge">Choose edge</NavLink></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
        </>
}

export default Nav