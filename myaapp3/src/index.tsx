import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fila from './componentes/Fila';
import Taula from './componentes/Taula';
import { useEffect, useState } from "react";
  type ProductType = {
    producto: string;
    cantidad: number;
    precio: number;
    tienda: string;
    notas: string;
    comprado: boolean;
    imagen: string;
  };
  const pageSize = 10;
  export const TableWithPaginationComponent = () => {
    const [products, setProducts] = useState<{ products: ProductType[] }>();
    const [currentPage, setCurrentPage] = useState(1);
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [currentDataDisplayed, setCurrentDataDisplayed] = useState<{ products: ProductType[] }>();
    const [previousAllowed, setPreviousAllowed] = useState(false);
    const [nextAllowed, setNextAllowed] = useState(true);
    const columns = ["Name", "Price", "Rating", "Brand", "Category", "Stock"];
    useEffect(() => {
      fetchProducts();
    }, []);
    useEffect(() => {
      products &&
        setCurrentDataDisplayed(() => {
          const page = products?.products?.slice((currentPage - 1) * pageSize, currentPage * pageSize);
          return { products: page };
        });
      setPreviousAllowed(() => currentPage > 1);
      setNextAllowed(() => currentPage < numberOfPages);
    }, [currentPage, products]);
    function fetchProducts() {
      fetch("https://dummyjson.com/products/")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setNumberOfPages(Math.ceil(data.products.length / pageSize));
        });
    }
    const handlePagination = (action: string) => {
      if (action === "prev") {
        if (!previousAllowed) return;
        setCurrentPage((prevState) => (prevState -= 1));
      }
      if (action === "next") {
        if (!nextAllowed) return;
        setCurrentPage((prevState) => (prevState += 1));
      }
    };
    return (
      <div>
        <table>
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentDataDisplayed
              ? currentDataDisplayed.products.map((product) => (
                  <tr key={product.producto}>
                    <td>{product.cantidad}</td>
                    <td>{product.precio}</td>
                    <td>{product.tienda}</td>
                    <td>{product.notas}</td>
                    <td>{product.comprado}</td>
                    <td>{product.imagen}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        {/* Pagination section */}
        <div>
          <div>
            <p>
              Showing{" "}
              <span>{pageSize * (currentPage - 1)}</span>{" "}
              to{" "}
              <span>
                {currentDataDisplayed &&
                  currentDataDisplayed.products.length +
                    (currentPage - 1) * pageSize}
              </span>{" "}
              of <span>{products?.products.length}</span>{" "}
              results
            </p>
          </div>
          <div>
            <button
              onClick={() => handlePagination("prev")}
            >
              Previous
            </button>
            <button
              onClick={() => handlePagination("next")}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    );
  };
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
