import React from "react";

// api
import {createProduk,updateProduk} from "../../api/MasterBarang/index";
import {createTransaksi} from "../../api/TransaksiPO/index";
// api

export default function FormCreate({nameFunction,id_supplier,id_product}) {

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
                    createProduk({FormData:Form,id_supplier:Form.supplier});
                    // id supplier form create harus di isi manual dari form
                break;
            case "update":
                    updateProduk({id_product,FormData:Form});
                break;
            default:
                console.log("Tidak ada pilihan");
                break;
        }
    },[Form,nameFunction,id_supplier,id_product]);

    return (
        <form className="form-group form-create-user">
            <div className="d-block">
                <label for="supplier">
                    ID Supplier
                </label>
                <input type="text" onChange={onInputForm} className="form-control w-50" name="supplier" value={id_supplier} placeholder="ID Supplier" />
            </div>
            <div className="d-block">
                <label for="fullname">
                    Nama product
                </label>
                <input type="text" onChange={onInputForm} className="form-control w-50" name="nama_product" placeholder="Telur Ayam" />
            </div>
            <div className="d-block">
                <label for="username">
                    Satuan
                </label>
                <input type="text" onChange={onInputForm} className="form-control w-50" name="satuan" placeholder="Butir" />
            </div>
            <div className="d-block">
                <label for="harga">
                    Harga
                </label>
                <input type="number" onChange={onInputForm} className="form-control w-50" name="harga" placeholder="Rp.0" />
            </div>
            <div className="d-block">
                <label for="suplai">
                    Suplai product
                </label>
                <input type="text" onChange={onInputForm} className="form-control w-50" name="suplai_product" placeholder="1 Kg" />
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-success" onClick={requestData}>
                    <i className="fa fa-save" />{"   "}Save
                </button>
            </div>
        </form>
    );
}