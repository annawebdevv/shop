import "./styles/Pagination.css";
import "./styles/Header.css";
import "./styles/Body.css";
import "./styles/App.css";
import "./styles/Media.css";
import { Header } from "./components/Header";

import { Body } from "./components/Body/Body";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductPage } from "./components/Body/Products/ProductPage";
export const ProductsContext = createContext(null);

function App() {
  const [state, setState] = useState({
    search: "",
    category: null,
    currentPage: 1
  });

  return (
    <BrowserRouter>
      <ProductsContext.Provider value={{ state, setState }}>
        <div className="App">
          <Header />

          <Routes>
            <Route path="/shop" element={<Body />} />
            <Route path="/:id" element={<ProductPage />} />
          </Routes>
        </div>
      </ProductsContext.Provider>
    </BrowserRouter>
  );
}

export default App;
