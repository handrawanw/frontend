import {baseAxios} from "../../store/index";

// function


// function

// GET



// GET

// POST

export function viewTransaksi({Dispatch,skip,limit}) {
    
    baseAxios.get("/transaksi/viewTransaksi",{
        params:{
            skip,limit
        }
    }).then(({data})=>{
        Dispatch({type:"SET_DATA_TRANSAKSI",data:{
            TransactionDataTable:data.payload.ViewData,
            total_transaction:data.payload.tx_now[0].total_transaction,
            volume_transaction:data.payload.tx_now[0].volume_transaction
        }});
    }).catch((err)=>{
        console.log(err);
    });
    
}

// POST

export function createTransaksi({FormData,id_product}) {
    baseAxios.post(`/transaksi/reportPO/${id_product}`,FormData).then(({data})=>{
        alert(data.message)
    }).catch((err)=>{
        let Message="";
        if(!err.response){
            Message=err.message;
        }else{
            Message=err.response.data.message;
        }
        alert(Message)
    });
}

// POST


// PATCH

export function updateTransaksi({id_table,FormData}) {
    baseAxios.patch(`/transaksi/updateDetailTx/${id_table}`,FormData).then(({data})=>{
        alert(data.message);
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    });
}

// PATCH


// DELETE

export function DeleteTransaksi({id}){
    baseAxios.delete(`/transaksi/deleteDetailTx/${id}`).then(({data})=>{
        alert(data.message);
    }).catch((err)=>alert(err));
}

// DELETE
