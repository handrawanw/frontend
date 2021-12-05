import {baseAxios} from "../../store/index";

// function


// function

// GET


export function viewTransaksi({Dispatch,skip,limit}) {
    
    baseAxios.get("/product",{
        params:{
            skip,limit
        }
    }).then(({data})=>{
        Dispatch({type:"SET_DATA_MASTER_BARANG",data:{
            TransactionDataTable:data.payload.ViewData,
            total_transaction:data.payload.tx_now.length>0?data.payload.tx_now[0].total_transaction:0,
            product_new:data.payload.newProduk.length>0?data.payload.newProduk[0].total_product:0
        }});
    }).catch((err)=>{
        console.log(err);
    });
    
}

// GET

// POST

export function createProduk({FormData,id_supplier}) {
    baseAxios.post(`/product/addProduct/${id_supplier}`,FormData).then(({data})=>{
        alert(data.message)
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    });
}

// POST


// PATCH

export function updateProduk({id_product,FormData}) {
    baseAxios.patch(`/product/edit/${id_product}`,FormData).then(({data})=>{
        alert(data.message);
    }).catch((err)=>{
        console.log(JSON.stringify(err));
    });
}

// PATCH


// DELETE

export function DeleteMasterBarang({id}){
    baseAxios.delete(`/product/remove/${id}`).then(({data})=>{
        alert(data.message);
    }).catch((err)=>alert(err));
}

// DELETE