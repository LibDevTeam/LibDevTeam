export function addToWishlist (email, book, dispatch) {
    async function postData() {
        let response = await fetch(`/api/v1/post/wishlist/add?email=${email}&id=${book.identity.low}`,{method: 'POST'});
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

export function removeFromWishlist (email, book, dispatch) {
    async function postData() {
        let response = await fetch(`/api/v1/post/wishlist/remove?email=${email}&id=${book.identity.low}`,{method: 'POST'});
        let statusCode1 = response.status;
        return statusCode1;
    }
    postData()
    .then(res => {
        if(res == 200 || res == 304) {
            dispatch({
                type: 'Remove_From_Wishlist',
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