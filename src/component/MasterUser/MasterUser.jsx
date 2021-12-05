import React from "react";
import "./MasterUser.css";
import ModalCreate from "./FormModal";
import PaginateData from "./PaginateData";
import FormUserCreate from "./FormUser";

import {useDispatch,useSelector} from "react-redux";

// api
import {viewTransaksi} from "../../api/User/index";
// api

export default function MasterUser(){

    let UserStoreReducer=useSelector((state)=>state.UserStoreReducer);

    const Dispatch=useDispatch();

    React.useLayoutEffect(()=>{
        viewTransaksi({Dispatch,skip:0,limit:5});
    },[Dispatch]);
    
    return (
        <div className="master-user">
            <h5>
                <i className="fa fa-users"/> Master User
            </h5>
            <div className="card-user-info">
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Total user</b>
                            <h6>{UserStoreReducer.Tx_Now?.total_user}</h6>
                        </div>
                    </div>
                </div>
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>User baru (Hari ini)</b>
                            <h6>{UserStoreReducer.Tx_Now?.total_user_new}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-action">
                <ModalCreate Variant="success" MessageBtn="Create user" Title="Tambahkan pengguna baru">
                    <FormUserCreate nameFunction="register" />
                </ModalCreate>
            </div>
            <PaginateData itemsPerPage={5} />
        </div>
    );
}