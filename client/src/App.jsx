import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import ViewProductPage from "./pages/ViewProductPage";
import EditProductPage from "./pages/EditProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route
            path="/product/edit/:productID"
            element={<EditProductPage />}
          />
          <Route
            path="/product/view/:productID"
            element={<ViewProductPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
