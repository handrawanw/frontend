import {baseAxios} from "../../store/index";

// function



// function

// GET

export function viewTransaksi({Dispatch,skip,limit}) {
    
    baseAxios.get("/transaksi/view",{
        params:{
            skip,limit
        }
    }).then(({data})=>{
        let TxStatusTransaction=data.payload.TxStatus.length>0?data.payload.TxStatus:[];
        let TransactionPending=TxStatusTransaction.find((item)=>item.status_kiriman&&item.status_kiriman.toLowerCase()==="pending");
        let TransactionSuccess=TxStatusTransaction.find((item)=>item.status_kiriman&&item.status_kiriman.toLowerCase()==="success");
        let TransactionFailed=TxStatusTransaction.find((item)=>item.status_kiriman&&item.status_kiriman.toLowerCase()==="failed");
        Dispatch({type:"SET_DATA_REPORT",data:{
            TransactionDataTable:data.payload.ViewData,
            total_transaction:data.payload.TotalData.length>0?data.payload.TotalData[0].count:0,
            transaction_pending:TransactionPending?TransactionPending.count:0,
            transaction_success:TransactionSuccess?TransactionSuccess.count:0,
            transaction_failed:TransactionFailed?TransactionSuccess.count:0
        }});
    }).catch((err)=>{
        console.log(err);
    });
    
}


// GET

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

export function updatePengiriman({FormData,id_product}) {
    baseAxios.patch(`/transaksi/updatePengiriman/${id_product}`,FormData).then(({data})=>{
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


// PATCH


// DELETE

export function DeleteTransaksiPengiriman({id}){
    baseAxios.delete(`/transaksi/deleteTXPengirimanModel/${id}`).then(({data})=>{
        alert(data.message);
    }).catch((err)=>console.log(JSON.stringify(err)));
}

// DELETE