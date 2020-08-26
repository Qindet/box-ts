import React, {FC} from "react";

import './edge-list-item.css'
import {EdgeListItemPropsType} from "../../../ts-types/props-types";

const EdgeListItem:FC<EdgeListItemPropsType> = ({item,onDelete}) => {

    return <>
        <div className="col s12 m7">
            <h2 className="header">Horizontal Card</h2>
            <div className="card horizontal">
                <div className="card-image">
                    <img src="https://lorempixel.com/100/190/nature/6"/>
                </div>
                <div className="card-stacked main-card">
                    <div className="card-content">
                        <p>{item.todo}</p>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                    </div>
                    <i onClick={() => onDelete(item.id)}
                        className="medium material-icons delete-icon">delete</i>

                </div>
            </div>
        </div>
        </>
}

export default EdgeListItem