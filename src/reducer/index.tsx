import React from "react";
// @ts-ignore
export const ContextApp = React.createContext();

export const initialState = {
        test: 'test_context'

};

export const testReducer = (state: any, action: any) => {
    switch(action.type) {
        case 'test_update':
            return {
                ...state,
                test: action.payload
            };
        default:
            return state
    }
};