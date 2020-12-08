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

    function addToWishlist(book) {
        async function postData() {
            let response = await fetch(`/api/v1/post/wishlist/add?email=${initialState.user_data[0].properties.email}&id=${book.identity.low}`,{method: 'POST'});
            let statusCode1 = response.status;
            return statusCode1;
        }
        postData()
        .then(res => {
            if(res == 200 || res == 304) {
                dispatch({
                    type: 'Add_To_Wishlist',
                    payload: book
                })
            }
            else {
                dispatch({
                    type: 'Error_Message',
                    payload: res
                })
            }
        })
    }

    return (
        <GlobalContext.Provider
            value={{
                user_data: state.user_data,
                getUserData,
                addToWishlist
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}