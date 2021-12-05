import React from "react";

// api
import {createUser,updateUser} from "../../api/User/index";
// api

export default function FormCreateUser({nameFunction,id_user}){

    const [Form,setForm]=React.useState({ role:"0", avatar:"belom ada" });

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
                    createUser({FormData:Form});
                break;
            case "update":
                    updateUser({FormData:Form,id_user});
                break;
            default:
                break;
        }
    },[Form,nameFunction,id_user]);


    return (
        <form className="form-group form-create-user">
            <div className="d-block">
                <label for="fullname">
                    Fullname
                </label>
                <input type="text" name="fullname" className="form-control w-50" id="fullname" onChange={onInputForm} />
            </div>
            <div className="d-block">
                <label for="username">
                    Username
                </label>
                <input type="text" name="username" className="form-control w-50" id="username" onChange={onInputForm} />
            </div>
            <div className="d-block">
                <label for="password">
                    password
                </label>
                <input type="password" name="password" className="form-control w-50" id="password" onChange={onInputForm} />
            </div>
            <div className="d-inline-block mt-2 mb-2">
                <label for="role">
                    Role
                </label>
                <select name="role" className="pl-3" onChange={onInputForm}>
                    <option value="tidak ada">
                        Pilih role
                    </option>
                    <option value="0">
                        0 User Biasa
                    </option>
                    <option value="20">
                        20 Super Admin
                    </option>
                </select>
            </div>
            <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-success" onClick={requestData}>
                    <i className="fa fa-save"/>{"   "}Save
                </button>
            </div>
        </form>
    );
}