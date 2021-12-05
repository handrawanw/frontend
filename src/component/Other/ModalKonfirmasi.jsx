import React from "react";

import {Button,Modal} from "react-bootstrap";

// api

import {DeleteMasterBarang} from "../../api/MasterBarang/index";
import {DeleteMasterSupplier} from "../../api/MasterSupplier/index";
import {DeleteMasterUser} from "../../api/User/index";
import {DeleteTransaksi} from "../../api/TransaksiPO/index";
import {DeleteTransaksiPengiriman} from "../../api/ReportPO/index";
// api

export default function ModalKonfirmasiHapus({id,nameFunction}) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const requestDelete=React.useCallback(()=>{
      switch (nameFunction) {
        case "del_user":
            DeleteMasterUser({id});
          break;
        case "del_barang":
            DeleteMasterBarang({id});
          break
        case "del_supplier":
            DeleteMasterSupplier({id});
          break;
        case "del_transaksi":
            DeleteTransaksi({id});
          break;
        case "del_transaksi_kirim":
            DeleteTransaksiPengiriman({id});
          break;
        default:
          console.log("Tidak ada pilihan");
          break;
      }
      handleClose();
    },[id,nameFunction]);

  
    return (
      <>
        <Button variant="danger" onClick={handleShow}>
          Hapus
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Konfirmasi</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah anda yakin ini hapus ?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={requestDelete}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  