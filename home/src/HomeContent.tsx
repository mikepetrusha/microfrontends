import React, { useEffect, useState } from "react";
import { currency, getProducts } from "./products";

export const HomeContent = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-10 grid grid-cols-4 gap-5 ">
      {products.map((product: any) => (
        <div key={product.id} className="border border-gray-300">
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-grow font-bold">
              <a href="/">{product.name}</a>
            </div>
            <div className="flex-end">{currency.format(product.price)}</div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
        </div>
      ))}
    </div>
  );
};
