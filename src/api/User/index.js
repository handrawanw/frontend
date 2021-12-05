import {baseAxios} from "../../store/index";

// function


// function

// GET


export function viewTransaksi({Dispatch,skip,limit}) {
    baseAxios.get("/user",{
        params:{
            skip,limit
        }
    }).then(({data})=>{
        Dispatch({type:"SET_DATA_USER",data:{
            TransactionDataTable:data.payload.ViewData,
            total_user:data.payload.tx_now.length>0?data.payload.tx_now[0].total_user:0,
            total_user_new:data.payload.user_new.length>0?data.payload.user_new[0].total_user_new:0
        }});
    }).catch((err)=>{
        console.log(err);
    });
    
}

// GET

// POST

export function createUser({FormData}) {
    baseAxios.post("/user/register",FormData).then(({data})=>{
        alert(data.message)
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    });
}

// POST


// PATCH

export function updateUser({id_user,FormData}) {
    baseAxios.patch(`/user/edit/${id_user}`,FormData).then(({data})=>{
        alert(data.message);
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    });
}


// PATCH


// DELETE

export function DeleteMasterUser({id}){
    baseAxios.delete(`/user/remove/${id}`).then(({data})=>{
        alert(data.message);
    }).catch((err)=>alert(err.message));
}

// DELETE