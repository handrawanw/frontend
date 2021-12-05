import React from "react";
import "./PrintOut.css";

import {useSelector} from "react-redux";
import { useParams } from "react-router-dom";

import printJS from "print-js";

export default function PrintOutReport() {

    const ReportPoStoreReducer=useSelector((state)=>state.ReportPOStoreReducer);

    const [Data,setData]=React.useState({});

    const { id } = useParams();

    React.useLayoutEffect(()=>{
        if(Array.isArray(ReportPoStoreReducer.TransactionDataTable)&&ReportPoStoreReducer.TransactionDataTable.length>0){
            setData(ReportPoStoreReducer.TransactionDataTable.find((item)=>String(item._id)===String(id)));
        }
    },[ReportPoStoreReducer.TransactionDataTable,id,setData]);

    return (
        <div className="my_print_transaksi container">
            <div className="menu-top p-4">
                <h5>Halaman Print Out Report</h5>
                <button className="btn btn-outline-primary" onClick={() => printJS("nota-report", "html")}>
                    <i className="fa fa-print" /> Print Out
                </button>
            </div>
            <div id="nota-report">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <td colSpan="5" className="text-center">Purchase Order Report</td>
                        </tr>
                        <tr>
                            <td colSpan="4">{Data?.detail_tx?.id_product?.id_supplier?.nama_supplier}</td>
                            <td>
                                To : {Data?.nama_pengirim}
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td colSpan="3">
                            {Data?.detail_tx?.id_product?.id_supplier?.alamat}
                            </td>
                            <td>{Data?.detail_tx?.id_product?.id_supplier?.no_hp}</td>
                            <td>{Data?.media_pengirim}</td>
                        </tr>
                        <tr>
                            <td>No Order</td>
                            <td>Satuan</td>
                            <td>Status</td>
                            <td>Harga</td>
                            <td>Jumlah</td>
                        </tr>
                        <tr>
                            <td>{Data?.detail_tx?.no_po}</td>
                            <td>{Data?.detail_tx?.id_product?.satuan}</td>
                            <td>{Data?.status_kiriman}</td>
                            <td>{Data?.detail_tx?.id_product?.harga}</td>
                            <td>{Data?.detail_tx?.jumlah}</td>
                        </tr>
                        <tr>
                            <td colSpan="3">Total</td>
                            <td colSpan="2" className="text-right">{Data?.detail_tx?.id_product?.harga*Data?.detail_tx?.jumlah}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}