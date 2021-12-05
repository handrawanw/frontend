import React from "react";
import "./MasterBarang.css";
import ModalCreate from "./FormModal";
import PaginateData from "./PaginateData";
import FormCreate from "./FormCreate";

import {useDispatch,useSelector} from "react-redux";

// api
import {viewTransaksi} from "../../api/MasterBarang/index";
// api

export default function MasterBarang(){

    let MasterBarangStoreReducer=useSelector((state)=>state.MasterBarangStoreReducer);

    const Dispatch=useDispatch();

    React.useLayoutEffect(()=>{
        viewTransaksi({Dispatch,skip:0,limit:5});
    },[Dispatch]);

    return (
        <div className="master-barang">
            <h5>
                <i className="fa fa-users"/> Master Product
            </h5>
            <div className="card-user-info">
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Total Product</b>
                            <h6>{MasterBarangStoreReducer.Tx_Now?.total_transaction}</h6>
                        </div>
                    </div>
                </div>
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Product baru (Hari ini)</b>
                            <h6>{MasterBarangStoreReducer.Tx_Now?.product_new}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-action">
                <ModalCreate Variant="success" MessageBtn="Create produk" Title="Tambahkan produk baru">
                    <FormCreate nameFunction="register" />
                </ModalCreate>
            </div>
            <PaginateData itemsPerPage={5} />
        </div>
    );
}