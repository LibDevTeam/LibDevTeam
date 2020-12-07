import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";

const initialState = {
    user_data: []
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function getUserData(data) {
        // console.log('hi');
        dispatch({
            type: 'Get_User_Data',
            payload: data
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                user_data: state.user_data,
                getUserData
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}