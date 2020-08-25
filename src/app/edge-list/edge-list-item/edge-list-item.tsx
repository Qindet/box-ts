import React, {FC} from "react";
import {IEdgeListItem} from "../../../interfaces";
import './edge-list-item.css'

const EdgeListItem:FC<IEdgeListItem> = ({item}) => {

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
                    <i
                        className="medium material-icons delete-icon">delete</i>

                </div>
            </div>
        </div>
        </>
}

export default EdgeListItem