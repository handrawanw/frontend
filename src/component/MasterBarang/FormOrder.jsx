import React from "react";

// api
import {createTransaksi,updateTransaksi} from "../../api/TransaksiPO/index";
// api

export default function FormOrder({nameFunction,id_product,id_supplier,Item}) {

    // {nama_product, satuan, harga, suplai_product}

    const [Form,setForm]=React.useState({});
    // {nama_supplier,email,alamat,no_hp}

    const onInputForm=(e)=>{
        setForm({
            ...Form,
            [e.target.name]:e.target.value
        });
        /*
            // ini adalah
            // e target name adalah nama field attribute name 
            // kalau attribut name nya username jadi otomatis di object javascriptnya {username:"input wawan"}
        */
    }

    const requestData=React.useCallback(()=>{
        switch (nameFunction) {
            case "register":
                    createTransaksi({FormData:Form,id_product});
                break;
            case "update":
                    updateTransaksi({FormData:Form,id_table:id_product});
                break;
            default:
                break;
        }
    },[Form,id_product,nameFunction]);

    return (
        <form className="form-group form-create-user">
            <div className="d-block">
                <label for="supplier">
                    ID Supplier
                </label>
                <input type="text" value={Item?.id_supplier?._id} disabled className="form-control w-50" />
            </div>
            <div className="d-block">
                <label for="nama produk">
                    Nama product
                </label>
                <input type="text" value={Item?.nama_product} disabled className="form-control w-50" />
            </div>
            <div className="d-block">
                <label for="satuan">
                    Satuan
                </label>
                <input type="text" value={Item?.satuan} disabled className="form-control w-50" />
            </div>
            <div className="d-block">
                <label for="harga">
                    Harga
                </label>
                <input type="text" value={Item?.harga} disabled className="form-control w-50" />
            </div>
            <div className="d-block">
                <label for="suplai">
                    Jumlah
                </label>
                <input type="number" onChange={onInputForm} className="form-control w-50" name="jumlah" placeholder="1" />
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-success" onClick={requestData}>
                    <i className="fa fa-save" />{"   "}Save
                </button>
            </div>
        </form>
    );
}