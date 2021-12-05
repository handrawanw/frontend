import React from "react";
import "./MasterSupplier.css";
import ModalCreate from "./FormModal";
import PaginateData from "./PaginateData";
import FormSupplier from "./FormSupplier";

import { useDispatch, useSelector } from "react-redux";

// api
import { viewTransaksi } from "../../api/MasterSupplier/index";
// api

export default function MasterUser() {

    let MasterSupplierStoreReducer = useSelector((state) => state.MasterSupplierStoreReducer);

    const Dispatch = useDispatch();

    React.useLayoutEffect(() => {
        viewTransaksi({ Dispatch, skip: 0, limit: 5 });
    }, [Dispatch]);

    return (
        <div className="master-supplier">
            <h5>
                <i className="fa fa-users" /> Master Supplier
            </h5>
            <div className="card-user-info">
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Total supplier</b>
                            <h6>{MasterSupplierStoreReducer.Tx_Now?.total_supplier}</h6>
                        </div>
                    </div>
                </div>
                <div className="item-card">
                    <div className="card">
                        <div className="card-body">
                            <b>Supplier baru (Hari ini)</b>
                            <h6>{MasterSupplierStoreReducer.Tx_Now?.total_supplier_new}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu-action">
                <ModalCreate Variant="success" MessageBtn="Create supplier" Title="Tambahkan supplier baru">
                    <FormSupplier nameFunction="register" />
                </ModalCreate>
            </div>
            <PaginateData itemsPerPage={5} />
        </div>
    );
}