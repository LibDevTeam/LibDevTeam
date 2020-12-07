export default (state,action) => {
    switch (action.type) {
        case 'Get_User_Data':
            state.user_data = action.payload;
            console.log(state);
            return {
                ...state,
            };
        default:
            return state;
    }
}