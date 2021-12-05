import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';


import {useDispatch,useSelector} from "react-redux";

// api
import {viewTransaksi} from "../../api/MasterBarang/index";
// api

// component
import FormModal from "./FormModal";
import FormCreate from "./FormCreate";
import FormOrder from './FormOrder';
import ModalKonfirmasiHapus from '../Other/ModalKonfirmasi';
// component

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {

  return (
    <div className="table-responsive w-100">
      <table className="table">
        <thead>
          <tr>
            <th>Nama Product</th>
            <th>Satuan</th>
            <th>Harga</th>
            <th>Supplier</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {currentItems &&
              currentItems.map((item,index) => (
              <tr>
                  <td>{item.nama_product}</td>
                  <td>{item.satuan}</td>
                  <td>{item.harga}</td>
                  <td>{item.id_supplier.email}</td>
                  <td>
                    <FormModal Variant="success" MessageBtn="Order" Title="Order product">
                      <FormOrder Item={item} id_product={item._id} nameFunction="register" />
                    </FormModal>
                    <FormModal Variant="warning" MessageBtn="Update" Title="Update product">
                      <FormCreate nameFunction="update" id_product={item._id} id_supplier={item.id_supplier?._id} />
                    </FormModal>
                    <ModalKonfirmasiHapus nameFunction="del_barang" id={item._id} />
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  
  let MasterBarangStoreReducer=useSelector((state)=>state.MasterBarangStoreReducer);

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
    // setCurrentItems(MasterBarangStoreReducer.TransactionDataTable.slice(itemOffset, endOffset));
    setCurrentItems(MasterBarangStoreReducer.TransactionDataTable);
    setPageCount(Math.ceil(MasterBarangStoreReducer.Tx_Now.total_transaction / itemsPerPage));
  }, [itemOffset, itemsPerPage,MasterBarangStoreReducer.TransactionDataTable,MasterBarangStoreReducer.Tx_Now]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % MasterBarangStoreReducer.Tx_Now.total_transaction;
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