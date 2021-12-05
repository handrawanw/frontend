import React from 'react'
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import {useHistory} from "react-router-dom";

export default function ProtectedLogin ({children, ...rest}){
    const isLogin = useSelector(state => state.LoginStoreReducer.isLogin);

    return (
        <Route {...rest}>
            {
                isLogin ?
                children : <Redirect to={"/"} />
            }
        </Route>
    )
    
}