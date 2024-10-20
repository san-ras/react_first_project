import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Please wait, loading...</div>;
  }

  return (
    <div
      className="row align-items-center ps-5 pe-5"
      style={{ marginTop: "10px" }}
    >
      <div className="col-sm">
        <img
          src={product.images[0]}
          alt={product.title}
          style={{ maxWidth: "500px" }}
        />
      </div>
      <div className="col-sm">
        <h2 className="pt-4 pb-4">{product?.title}</h2>
        <p>Category: {product?.category}</p>
        <p>{product.description}</p>
        <p>
          Price: <strong>{product.price} eur</strong>
        </p>
        <p>{product.availabilityStatus}</p>
        <p>{product.shippingInformation}</p>
      </div>
    </div>
  );
};
