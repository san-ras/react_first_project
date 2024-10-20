import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
//import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductComponent = (props) => {
  const [show, setShow] = useState(false);

  // const handleShow = () => {
  //   setShow(true);
  // };

  // const handleClose = () => {
  //   setShow(false);
  // };

  return (
    <>
      <div className="col-4 mb-4">
        <div className="card border-success" style={{ height: "100%" }}>
          <div>
            <img
              src={props.url}
              className="card-img-top objectFit: 'cover'"
              alt={props.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
          </div>
          <div className="card-body d-flex flex-column flex-grow-1">
            {props.discount > 5 ? (
              <span className="position-absolute top-0 end-0 badge bg-danger m-2">
                On Sale!
              </span>
            ) : (
              <span className="position-absolute top-0 end-0 badge bg-warning m-2">
                New!
              </span>
            )}
            <Link to={`/products/${props.id}`} className="card-title fs-5">
              <strong>{props.title}</strong>
            </Link>
            <p className="card-text fs-6">
              Price: <strong>{props.price}</strong> eur
            </p>
            <p className="text-success fs-6 m-auto">
              In stock: {props.quantity}{" "}
            </p>
            <p className="text-success fs-6">Category: {props.category}</p>
            <div className="mt-auto">
              <button
                className="btn btn-primary"
                onClick={() => props.handleShow(props)}
              >
                More info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img src={props.url} alt={props.title} />
            <p className="m-3">{props.description}</p>
            <p className="m-3">
              Price: <strong>{props.price}</strong> eur
            </p>
            <p className="text-success">In stock: {props.quantity} </p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            To cart
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
