import { messageBox } from "./util";

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
            messageBox('Added to wishlist',1);
            return {
                ...state,
            }

        case 'Remove_From_Wishlist':
            console.log(state);
            let newWishlist = state.user_data[2].filter(wishlist => wishlist.identity.low !== action.payload.identity.low)
            state.user_data[2] = newWishlist;
            messageBox('Removed from wishlist',1);
            return {
                ...state,
            }
        case 'Remove_From_Preference':
            let newPreference = state.user_data[1].filter(preference => preference.identity.low !== action.payload.identity.low)
            state.user_data[1] = newPreference;
            messageBox('Removed from preference',1)
            return {
                ...state,
            }

        case 'Add_To_Preference':
            state.user_data[1].push(action.payload);
            messageBox('Added to preference',1);
            return {
                ...state,
            }

        case 'Error_Message':
            messageBox(`ERROR ${action.payload} OCCURED`,0)
            return state;

        default:
            return state;
    }
}

export default reducer;