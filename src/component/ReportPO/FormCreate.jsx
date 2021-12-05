import React from "react";

// api
import {createTransaksi,updatePengiriman} from "../../api/ReportPO/index";
// api

export default function FormCreate({nameFunction,id_product}) {

    // { nama_pengirim, tanggal_po, tanggal_kirim, status_kiriman, media_pengirim }

    const [Form,setForm]=React.useState({});

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
                    // id supplier form create harus di isi manual dari form
                    createTransaksi({FormData:Form,id_product});
                break;
            case "update":
                    updatePengiriman({FormData:Form,id_product});
                break;
            default:
                    console.log("Tidak ada pilihan");
                break;
        }
    },[Form,nameFunction,id_product]);

    return (
        <form className="form-group form-create-user">
            <div className="d-block">
                <label for="supplier">
                    Nama
                </label>
                <input type="text" onChange={onInputForm} className="form-control w-50" name="nama_pengirim" placeholder="Waluyo" />
            </div>
            <div className="d-block">
                <label for="username">
                    Tanggal Kirim
                </label>
                <input type="date" onChange={onInputForm} className="form-control w-50" name="tanggal_kirim" placeholder={new Date().toLocaleString()} />
            </div>
            <div className="d-block">
                <label for="harga">
                    Status
                </label>
                <select name="status_kiriman" onChange={onInputForm}>
                    <option value="...">...</option>
                    <option value="Success">Sukses</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
                </select>
            </div>
            <div className="d-block">
                <label for="suplai">
                    Media pengirim
                </label>
                <input type="text" onChange={onInputForm} className="form-control w-50" name="media_pengirim" placeholder="Go Send" />
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-success" onClick={requestData}>
                    <i className="fa fa-save" />{"   "}Save
                </button>
            </div>
        </form>
    );
}