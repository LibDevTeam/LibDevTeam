import React, { useEffect, useContext } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import { GlobalContext } from './GlobalState';
import { useAuth0 } from '@auth0/auth0-react';

function Page() {
    const { isAuthenticated, user } = useAuth0();
    const { user_data, getUserData } = useContext(GlobalContext);

    useEffect(() => {
        console.log(user_data);
    }, [user_data])

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`/api/v1/get/userDetails?email=${user.email}`)
            .then(res => res.json())
            .then(data => getUserData(data))
        }
        if(isAuthenticated) {
            fetchData();
        }
    },[user, isAuthenticated])

    // console.log(user_data);

    return (
        <>
            <Header/>
            <Content/>
            <Footer/>
        </>
    )
}

export default Page
