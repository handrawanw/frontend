import React from "react";
import "./Login.css";

import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";

// api axios
import {LoginAPI} from "../../api/Login/index";
// api axios

import {jwtValid} from "../../functions/checkJwt";
// function

export default function Login() {

    const history=useHistory();

    const [loginData,setLogin]=React.useState({
        username:"",
        password:"",
        save_login:false
    });

    const Dispatch=useDispatch();

    const onLoginInput=(e)=>{
        setLogin({
            ...loginData,
            [e.target.name]:e.target.value
        });
    };

    const requestLogin=React.useCallback(()=>{
        LoginAPI({Dispatch,FormData:{
            username:loginData.username,
            password:loginData.password,
        }}).then((data)=>{
            window.location.assign("/dashboard");
        });
    },[loginData,Dispatch,history]);

    React.useLayoutEffect(()=>{
        if(!jwtValid(localStorage.getItem("token"))){
            Dispatch({type:"SET_LOGIN",data:{
                isLogin:true
            }});
            history.push("/dashboard");
        }else{
            Dispatch({type:"SET_LOGIN",data:{
                isLogin:false
            }});
        }
    },[jwtValid,Dispatch]);


    return (
        <div className="login-container">
            <form className="form-container">
                <div className="form-group login-width-card m-2">
                    <h3 class="text-center p-2">Login form</h3>
                    <label for="username">Username</label>
                    <input type="text" className="form-control pt-1" name="username" id="username" placeholder="Username" onChange={onLoginInput} />
                    <label for="password">Password</label>
                    <input type="password" className="form-control pt-1" name="password" id="password" placeholder="Password" onChange={onLoginInput} />
                    <input type="checkbox" id="forgotPassword" name="save_login" onChange={(e)=>setLogin({...loginData,save_login:!loginData.save_login})} />
                    <label for="forgotPassword" className="p-1">
                        Save login
                    </label>
                    <div className="d-flex flex-row pt-2">
                        <button type="button" onClick={requestLogin} className="form-control btn btn-success">
                            Login
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}