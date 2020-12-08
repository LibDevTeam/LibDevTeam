import React, { useEffect } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import { useAuth0 } from '@auth0/auth0-react';
import { useStateValue } from './StateProvider';

function Page() {
    const [{ user_data }, dispatch] = useStateValue();
    const { isAuthenticated, user } = useAuth0();

    useEffect(() => {
        console.log(user_data);
    }, [user_data])

    console.log(user_data);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/api/v1/get/userDetails?email=${user.email}`)
            .then(res => res.json())
            .then(res => dispatch({
                type: 'Get_User_Data',
                payload: res,
            }))
        }
        if(isAuthenticated) {
            fetchData();
        }
    },[user, isAuthenticated])

    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    )
}

export default Page
