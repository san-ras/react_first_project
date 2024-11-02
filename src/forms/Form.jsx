import { useState } from "react";
import axios from "axios";
import { Toast } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Form = () => {
  const initialFormData = {
    title: "",
    description: "",
    category: "",
    price: 0,
    discountPercentage: 0,
    brand: "",
    shippingInformation: "",
    warrantyInformation: "",
    availabilityStatus: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [responseData, setResponseData] = useState();
  const [toastToggle, setToastToggle] = useState(false);
  const [descriptionError, setDescriptionError] = useState("");
  const [priceError, setPriceError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post(
        "https://dummyjson.com/products/add",
        formData
      );
      setResponseData(res.data);
      setToastToggle(true);
    } catch (error) {
      console.error("Error making POST request:", error);
    }
  };

  const handleForm = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    if (event.target.name === "description" && event.target.value.length < 5) {
      setDescriptionError("Length should be at least 5 symbols");
    } else {
      setDescriptionError("");
    }
    if (event.target.name === "price" && event.target.value < 0.01) {
      setPriceError("Price should be a number of at least 0.01");
    } else {
      setPriceError("");
    }
  };

  const toggleshowToast = () => {
    setToastToggle(!toastToggle);
    if (toastToggle) {
      setFormData(initialFormData);
    }
  };

  return (
    <div>
      <p>Enter product details:</p>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          onChange={handleForm}
          value={formData.title}
          required
        />
        <p />
        <label>Description: </label>
        <input
          type="text"
          name="description"
          minLength={5}
          onChange={handleForm}
          value={formData.description}
          required
        />
        <p>{descriptionError}</p>
        <p />
        <label>Category: </label>
        <input
          type="text"
          name="category"
          onChange={handleForm}
          value={formData.category}
          required
        />
        <p />
        <label>Price: </label>
        <input
          type="number"
          step="0.01"
          name="price"
          onChange={handleForm}
          value={formData.price}
          required
        />
        <p>{priceError}</p>
        <p />
        <label>Discount Percentage: </label>
        <input
          type="number"
          name="discountPercentage"
          min={0}
          max={100}
          onChange={handleForm}
          value={formData.discountPercentage}
          required
        />
        <p />
        <label>Brand: </label>
        <input
          type="text"
          name="brand"
          onChange={handleForm}
          value={formData.brand}
          required
        />
        <p />
        <label>Shipping Information: </label>
        <input
          type="text"
          name="shippingInformation"
          onChange={handleForm}
          value={formData.shippingInformation}
          required
        />
        <p />
        <label>Warranty Information: </label>
        <input
          type="text"
          name="warrantyInformation"
          onChange={handleForm}
          value={formData.warrantyInformation}
          required
        />
        <p />
        <label>Availability Status: </label>
        <input
          type="text"
          name="availabilityStatus"
          onChange={handleForm}
          value={formData.availabilityStatus}
          required
        />
        <p />
        <button>Submit</button>
      </form>

      {toastToggle && (
        <Toast
          className="position-fixed top-50 start-50 bg-white translate-middle border-success p-3 border-5"
          onClose={toggleshowToast}
        >
          <Toast.Header>
            <strong className="me-auto m-auto">{responseData?.title}</strong>
          </Toast.Header>
          <Toast.Body>
            has been successfully added with id = {responseData?.id}.
          </Toast.Body>
        </Toast>
      )}
    </div>
  );
};
