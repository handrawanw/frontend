import React from "react";
import "./ReportPO.css";
import PaginateData from "./PaginateData";

// module
import {useDispatch,useSelector} from "react-redux";
// module

// api

import {viewTransaksi} from "../../api/ReportPO/index";

// api

export default function ReportPO(){

    let ReportPOStoreReducer=useSelector((state)=>state.ReportPOStoreReducer);

    const Dispatch=useDispatch();

    React.useLayoutEffect(()=>{
        viewTransaksi({Dispatch,skip:0,limit:5});
    },[Dispatch]);
    

    return (
        <div className="transaksi-po">
            <h5>
                <i className="fa fa-users"/>Report PO
            </h5>
            <div className="card-user-info">
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Total transaksi</b>
                            <h6>{ReportPOStoreReducer.Tx_Now?.total_transaction}</h6>
                        </div>
                    </div>
                </div>
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Transaksi Pending</b>
                            <h6>{ReportPOStoreReducer.Tx_Now?.transaction_pending}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-user-info">
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Transaksi Berhasil</b>
                            <h6>{ReportPOStoreReducer.Tx_Now?.transaction_success}</h6>
                        </div>
                    </div>
                </div>
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Transaksi Dibatalkan</b>
                            <h6>{ReportPOStoreReducer.Tx_Now?.transaction_failed}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <PaginateData itemsPerPage={5} />
        </div>
    );
}