import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
function EditProductForm() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.productId;
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  async function getData() {
    try {
      const response = await axios.get(`http://localhost:4001/products/${id}`);
      setName(response.data.data.name);
      setImage(response.data.data.image);
      setPrice(response.data.data.price);
      setDescription(response.data.data.description);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  async function handleUpdate(e) {
    e.preventDefault();
    const updateProduct = {
      name: name,
      price: price,
      image: image,
      description: description,
    };
    await axios.put(`http://localhost:4001/products/${id}`, updateProduct);
    navigate("/");
  }
  console.log(name);
  return (
    <form className="product-form" onSubmit={handleUpdate}>
      <h1>Edit Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            value={name}
            type="text"
            placeholder="Enter name here"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            value={image}
            type="text"
            placeholder="Enter image url here"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            value={price}
            type="number"
            placeholder="Enter price here"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            value={description}
            type="text"
            placeholder="Enter description here"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Update</button>
      </div>
    </form>
  );
}

export default EditProductForm;
