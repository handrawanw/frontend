import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import {useSelector,useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import moment from "moment";

// api
import {viewTransaksi} from "../../api/ReportPO/index";
// api

// Component
import FormModal from "./FormModal";
import FormCreate from './FormCreate';
import ModalKonfirmasiHapus from "../Other/ModalKonfirmasi";
// Component



// Example items, to simulate fetching from another resources.
function Items({ currentItems }) {

  return (
    <div className="table-responsive w-100">
      <table className="table">
        <thead>
          <tr>
            <th>Nomor Produk</th>
            <th>Status</th>
            <th>Media pengirim</th>
            <th>Tanggal Kirim</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {currentItems &&
              currentItems.map((item,index) => (
              <tr>
                  <td>{item.detail_tx.no_po}</td>
                  <td>{item.status_kiriman}</td>
                  <td>{item.media_pengirim}</td>
                  <td>{moment(item.tanggal_kirim).format("L LTS")}</td>
                  <td>
                    <Link className="btn btn-outline-success" to={`/dashboard/printreport/${item._id}`}>
                      Print Out
                    </Link>
                    <FormModal Variant="warning" MessageBtn="Update" Title="Update pengiriman">
                      <FormCreate nameFunction="update" id_product={item._id} />
                    </FormModal>
                    <ModalKonfirmasiHapus nameFunction="del_transaksi_kirim" id={item._id} />
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  const Dispatch=useDispatch();
  const newItem=useSelector((state)=>state.ReportPOStoreReducer);
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    let endOffset = itemOffset + Number(itemsPerPage);
    // setCurrentItems(newItem.TransactionDataTable.slice(itemOffset, endOffset));
    setCurrentItems(newItem.TransactionDataTable);
    setPageCount(Math.ceil(newItem.Tx_Now.total_transaction / itemsPerPage));
  }, [itemOffset, itemsPerPage,newItem.TransactionDataTable,newItem.Tx_Now]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % newItem.Tx_Now?.total_transaction;
    viewTransaksi({Dispatch,skip:newOffset,limit:5});
    setItemOffset(newOffset);
  };


  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
}