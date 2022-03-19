import { Button, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

const Reactmodal = (props) => {
    const { category, image, title } = props.details;
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Details
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='text-danger'>{category}</div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='text-center'>
                        <div><img className='w-25 mb-2' src={image} alt="" /></div>
                        <div className='fw-bold'>{title}</div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Reactmodal;