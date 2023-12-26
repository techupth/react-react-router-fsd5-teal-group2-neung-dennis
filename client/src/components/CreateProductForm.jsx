import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateProductForm() {
  const [description, setDescription] = useState("");

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    const newProduct = {
      name: name,
      price: price,
      image: image,
      description: description,
    };
    console.log(newProduct);
    try {
      await axios.post("http://localhost:4001/products", newProduct);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
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
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default CreateProductForm;
