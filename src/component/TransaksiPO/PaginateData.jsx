import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import {Link} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";

// api
import {viewTransaksi} from "../../api/TransaksiPO/index";
// api

// Component
import FormModal from "./FormModal";
import FormCreate from "../ReportPO/FormCreate";
import ModalKonfirmasiHapus from "../Other/ModalKonfirmasi";
import FormOrder from "../MasterBarang/FormOrder";
// Component


// Example items, to simulate fetching from another resources.
function Items({ currentItems }) {

  return (
    <div className="table-responsive w-100">
      <table className="table">
        <thead>
          <tr>
            <th>Nama Product</th>
            <th>Nomor Order</th>
            <th>Harga</th>
            <th>Jumlah</th>
            {/* <th>Supplier</th> */}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {currentItems &&
              currentItems.map((item,index) => (
              <tr>
                  <td>{item.id_product.nama_product}</td>
                  <td>{item.no_po}</td>
                  <td>{item.id_product.harga}</td>
                  <td>{item.jumlah}</td>
                  {/* <td>{item.id_product.id_supplier.email}</td> */}
                  <td>
                    <FormModal Variant="success" MessageBtn="Checkout" Title="Checkout order ke penjual">
                      <FormCreate id_product={item._id} nameFunction="register" />
                    </FormModal>
                    <FormModal Variant="warning" MessageBtn="Update" Title="Checkout order ke penjual">
                      <FormOrder id_product={item._id} Item={item.id_product} nameFunction="update" />
                    </FormModal>
                    <ModalKonfirmasiHapus nameFunction="del_transaksi" id={item._id} />
                    <Link className="btn btn-outline-success" to={`/dashboard/printtransaksi/${item._id}`}>
                      Print Out
                    </Link>
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
  const newItem=useSelector((state)=>state.TransaksiPOStoreReducer);
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