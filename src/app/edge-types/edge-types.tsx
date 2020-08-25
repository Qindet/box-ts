import React from "react";



const EdgeTypes = () => {

    return (
        <div className="row">
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s6">
                        <input id="input_text" type="text" data-length="10"/>
                        <label htmlFor="input_text">Type of cube</label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s12">
                        <textarea id="textarea2" className="materialize-textarea" data-length="120"></textarea>
                        <label htmlFor="textarea2">About cube</label>
                    </div>
                </div>
            </form>
        </div>
    )
}



export default EdgeTypes