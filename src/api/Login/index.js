import {baseAxios} from "../../store/index";

// function

import {jwtValid} from "../../functions/checkJwt";

// function

// GET



// GET

// POST

export function LoginAPI({Dispatch,FormData}) {
    
    return baseAxios.post("/user/login",FormData).then(({data})=>{
            localStorage.setItem("token",data.token);
            Dispatch({type:"SET_LOGIN",data:{
                isLogin:true
            }});
            return true;
    }).catch(console.log);
    
}

// POST


// PATCH


// PATCH


// DELETE


// DELETE