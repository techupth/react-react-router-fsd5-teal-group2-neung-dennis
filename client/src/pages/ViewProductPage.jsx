import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ViewProductPage() {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // ดึงข้อมูลสินค้าจาก API โดยใช้ productID
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:4001/products/:id`);
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
          <h2>{product.name}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/">Back to Home</Link>
    </div>
  );
}

export default ViewProductPage;
