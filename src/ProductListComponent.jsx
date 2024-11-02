import { ProductComponent } from "./ProductComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ProductListComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalProduct, setModalProduct] = useState();
  const [toastProduct, setToastProduct] = useState();

  const toggleshowToast = () => setToastProduct(undefined);

  const handleToastShow = (modalProduct) => {
    setToastProduct(modalProduct);
    handleClose();
  };
  //const [show, setShow] = useState(false);

  const handleShow = (product) => {
      console.log("Opening modal for:", product);
    setModalProduct(product);
    //   setShow(true);
  };

  const handleClose = () => {
    // setShow(false);
    setModalProduct(undefined);
  };

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Please wait, list is loading...</div>;
  }

  return (
    <>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <ProductComponent
              key={product.id}
              title={product.title}
              url={product.images[0]}
              price={product.price}
              description={product.description}
              quantity={product.stock}
              category={product.category}
              discount={product.discountPercentage}
              id={product.id}
              handleShow={handleShow}
            />
          ))}
        </div>
      </div>

      <Toast
        show={!!toastProduct}
        onClose={toggleshowToast}
        className="position-fixed top-50 start-50 bg-white translate-middle border-success p-3 border-5"
      >
        <Toast.Header>
          <strong className="me-auto m-auto">{toastProduct?.title}</strong>
        </Toast.Header>
        <Toast.Body>has been successfully added to the cart!</Toast.Body>
      </Toast>

      {/* <Modal show={show} onHide={handleClose}> */}
      <Modal show={modalProduct} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title data-testid="modal-product-title">
            {modalProduct?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center justify-content-center">
            <img
              src={modalProduct?.url}
              alt={modalProduct?.title}
              style={{ width: "100%", height: "20rem", objectFit: "contain" }}
            />
            <p className="m-3">{modalProduct?.description}</p>
            <p className="m-3">
              Price: <strong>{modalProduct?.price}</strong> eur
            </p>
            <p className="text-success">In stock: {modalProduct?.quantity} </p>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => handleToastShow(modalProduct)}
          >
            Add to cart
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProductListComponent;
