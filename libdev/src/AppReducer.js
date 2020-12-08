export default (state,action) => {
    switch (action.type) {
        case 'Get_User_Data':
            state.user_data = action.payload;
            console.log(state);
            return {
                ...state,
            };

        case 'Add_To_Wishlist':
            console.log(`book ${action.payload.identity.low} added to wishlist`);
            if(state.user_data[2]) {
                state.user_data[2].push(action.payload);
            }
            console.log(state);
            return state;

        case 'Error_Message':
            window.alert(`ERROR ${action.payload} OCCURRED`);
            return state;

        default:
            return state;
    }
}