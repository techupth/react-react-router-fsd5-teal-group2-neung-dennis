import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function ViewProductPage() {
  const param = useParams();
  console.log(param);
  const id = param.productId;
  const [data, setData] = useState();
  async function getData() {
    try {
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      setData(response.data?.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [id]);
  console.log(param);
  console.log(data);
  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>{data?.name}</h2>
        <p>{data?.price} THB</p>
        <p>{data?.description}</p>
      </div>
      <Link to="/">
        <button>Back to Home</button>
      </Link>
    </div>
  );
}

export default ViewProductPage;
