import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

import {useDispatch,useSelector} from "react-redux";

// api
import {viewTransaksi} from "../../api/User/index";
// api


// Component
import ModalUpdate from "./FormModal";
import ModalKonfirmasi from "../Other/ModalKonfirmasi";
import FormUpdate from "./FormUser";
// Component

// Example items, to simulate fetching from another resources.

function Items({ currentItems }) {

  return (
    <div className="table-responsive w-100">
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Fullname</th>
            <th>Username</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {currentItems &&
              currentItems.map((item) => (
              <tr>
                  <td>{item.avatar}</td>
                  <td>{item.fullname}</td>
                  <td>{item.username}</td>
                  <td>{item.role}</td>
                  <td>
                    <ModalUpdate Variant={"warning"} MessageBtn="Update" Title="Update informasi user">
                      <FormUpdate nameFunction="update" id_user={item._id}  />
                    </ModalUpdate>
                    <ModalKonfirmasi id={item._id} nameFunction="del_user" />
                  </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PaginatedItems({ itemsPerPage }) {
  
  let UserStoreReducer=useSelector((state)=>state.UserStoreReducer);

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
    // setCurrentItems(UserStoreReducer.TransactionDataTable.slice(itemOffset, endOffset));
    setCurrentItems(UserStoreReducer.TransactionDataTable);
    setPageCount(Math.ceil(UserStoreReducer.Tx_Now.total_user / itemsPerPage));
  }, [itemOffset, itemsPerPage,UserStoreReducer.TransactionDataTable,UserStoreReducer.Tx_Now]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % UserStoreReducer.Tx_Now.total_user;
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