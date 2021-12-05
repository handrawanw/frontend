import {baseAxios} from "../../store/index";

// function


// function

// GET



export function viewTransaksi({Dispatch,skip,limit}) {
    
    baseAxios.get("/supplier",{
        params:{
            skip,limit
        }
    }).then(({data})=>{
        Dispatch({type:"SET_DATA_MASTER_SUPPLIER",data:{
            TransactionDataTable:data.payload.ViewData,
            total_supplier:data.payload.tx_now.length>0?data.payload.tx_now[0].total_supplier:0,
            total_supplier_new:data.payload.supplier_new.length>0?data.payload.supplier_new[0].total_supplier_new:0
        }});
    }).catch((err)=>{
        console.log(err);
    });
    
}

// GET

// POST

export function createSupplier({FormData}) {
    baseAxios.post("/supplier/addSupplier",FormData).then(({data})=>{
        alert(data.message)
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    });
}

// POST


// PATCH

export function updateSupplier({id_user,FormData}) {
    baseAxios.patch(`/supplier/editSupplier/${id_user}`,FormData).then(({data})=>{
        alert(data.message);
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    });
}

// PATCH


// DELETE

export function DeleteMasterSupplier({id}){
    baseAxios.delete(`/supplier/remove/${id}`).then(({data})=>{
        alert(data.message);
    }).catch((err)=>alert(err));
}

// DELETE