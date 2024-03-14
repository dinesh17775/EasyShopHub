import React from "react";
import { products } from "./ProductsDetails";
import Product from "./Product";
function Products() {
  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} {...product}></Product>;
      })}
    </div>
  );
}

export default Products;
