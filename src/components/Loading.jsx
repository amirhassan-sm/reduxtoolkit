import React from 'react'
import {  Outlet, useLoaderData, useNavigate, useNavigation } from 'react-router-dom'


const Loading = () => {
    const navigation = useNavigation();


if(navigation.state == "loading" ){
    return <h1 style={{textAlign:"center"}}>loading ....</h1>
}
else
    return (
        <div>
            <Outlet/>

            
        </div>
    )



}

export default Loading
