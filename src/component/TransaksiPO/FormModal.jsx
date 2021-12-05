import React from "react";
import {Modal,Button} from "react-bootstrap";

export default function ModalCreateUser({Variant,MessageBtn,Title,children}) {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant={Variant} onClick={handleShow}>
          {MessageBtn}
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {Title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {children}
          </Modal.Body>
        </Modal>
      </>
    );
  }