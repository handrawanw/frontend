import React from "react";

// api
import {createSupplier,updateSupplier} from "../../api/MasterSupplier/index";
// api

export default function FormCreateUser({nameFunction,id_user}){

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
                    createSupplier({FormData:Form});
                break;
            case "update":
                    updateSupplier({FormData:Form,id_user});
                break;
            default:
                break;
        }
    },[Form,nameFunction,id_user]);


    return (
        <form className="form-group form-create-user">
            <div className="d-block">
                <label for="name_supplier">
                    Nama supplier
                </label>
                <input type="text" name="nama_supplier" className="form-control w-50" id="username" onChange={onInputForm} />
            </div>
            <div className="d-block">
                <label for="email">
                    email
                </label>
                <input type="email" name="email" className="form-control w-50" onChange={onInputForm} />
            </div>
            <div className="d-block">
                <label for="no_hp">
                    no hp
                </label>
                <input type="text" name="no_hp" className="form-control w-50" onChange={onInputForm} />
            </div>
            <div className="d-block">
                <label for="alamat">
                    alamat
                </label>
                <textarea cols="20" rows="7" name="alamat" className="form-control w-50" onChange={onInputForm}>

                </textarea>
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-success" onClick={requestData}>
                    <i className="fa fa-save"/>{"   "}Save
                </button>
            </div>
        </form>
    );
}