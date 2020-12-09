export const initialState = {
    user_data: []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'Get_User_Data':
            state.user_data = action.payload;
            console.log(state);
            return {
                ...state,
              }

        case 'Add_To_Wishlist':
            console.log(123);
            console.log(action.payload);
            state.user_data[2].push(action.payload);
            return {
                ...state,
            }

        case 'Remove_From_Wishlist':
            console.log(state);
            let newWishlist = state.user_data[2].filter(wishlist => wishlist.identity.low !== action.payload.identity.low)
            state.user_data[2] = newWishlist;
            return {
                ...state,
            }

        case 'Error_Message':
            window.alert(`ERROR ${action.payload} OCCURED`);
            return state;

        default:
            return state;
    }
}

export default reducer;