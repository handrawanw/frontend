import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import Modal from "./FormModal";
import FormSupplier from "./FormSupplier";


import {useDispatch,useSelector} from "react-redux";

import ModalKonfirmasi from "../Other/ModalKonfirmasi";

// api
import {viewTransaksi} from "../../api/MasterSupplier/index";
// api

function Items({ currentItems }) {

  return (
    <div className="table-responsive w-100">
      <table className="table">
        <thead>
          <tr>
            <th>ID Supplier</th>
            <th>Nama Supplier</th>
            <th>Alamat</th>
            <th>No HP</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {currentItems &&
              currentItems.map((item) => (
              <tr>
                  <td>{item._id}</td>
                  <td>{item.nama_supplier}</td>
                  <td>{item.alamat}</td>
                  <td>{item.no_hp}</td>
                  <td>
                    <Modal Variant={"warning"} MessageBtn="Update" Title="Update informasi supplier">
                      <FormSupplier nameFunction="update" id_user={item._id} />
                    </Modal>
                    <ModalKonfirmasi id={item._id} nameFunction="del_supplier" />
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  
  let MasterSupplierStoreReducer=useSelector((state)=>state.MasterSupplierStoreReducer);

  const Dispatch=useDispatch();

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    let endOffset = itemOffset + Number(itemsPerPage);
    // setCurrentItems(MasterSupplierStoreReducer.TransactionDataTable.slice(itemOffset, endOffset));
    setCurrentItems(MasterSupplierStoreReducer.TransactionDataTable);
    setPageCount(Math.ceil(MasterSupplierStoreReducer.Tx_Now.total_supplier / itemsPerPage));
  }, [itemOffset, itemsPerPage,MasterSupplierStoreReducer.TransactionDataTable,MasterSupplierStoreReducer.Tx_Now]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % MasterSupplierStoreReducer.Tx_Now.total_supplier;
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