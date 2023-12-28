import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const params = useParams();
  const productID = params.productID;
  console.log(params);
  const [product, setProduct] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4001/products/${productID}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productID]);

  return (
    <div>
      <h1>View Product Page</h1>
      {product ? (
        <div className="view-product-container">
          <h2>{product.data.name}</h2>
          <p>{product.data.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ViewProductPage;
