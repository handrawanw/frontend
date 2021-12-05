import React from "react";
import "./TransaksiPO.css";
import PaginateData from "./PaginateData";

// module
import {useDispatch,useSelector} from "react-redux";
// module

// api

import {viewTransaksi} from "../../api/TransaksiPO/index";

// api

export default function TransaksiPO(){

    let TransaksiPOStoreReducer=useSelector((state)=>state.TransaksiPOStoreReducer);

    const Dispatch=useDispatch();

    React.useLayoutEffect(()=>{
        viewTransaksi({Dispatch,skip:0,limit:5});
    },[Dispatch]);
    
    return (
        <div className="transaksi-po">
            <h5>
                <i className="fa fa-users"/>Transaksi PO
            </h5>
            <div className="card-user-info">
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Total transaksi</b>
                            <h6>{TransaksiPOStoreReducer.Tx_Now?.total_transaction}</h6>
                        </div>
                    </div>
                </div>
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Volume Transaksi</b>
                            <h6>{TransaksiPOStoreReducer.Tx_Now?.volume_transaction}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <PaginateData itemsPerPage={5} />
        </div>
    );
}