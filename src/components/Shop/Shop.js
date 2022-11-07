import { useEffect, useState } from "react";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
  };

  return (
    <div className="lg:flex w-11/12 mx-auto">
      <div className="basis-3/4 mt-10">
        <div className="lg:grid lg:grid-cols-3 gap-4">
          {products.map((pd) => (
            <Product key={pd.id} product={pd} handleCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <div className="basis-1/4">
        <h1 className="text-3xl font-semibold text-center">Order Summery</h1>
      </div>
    </div>
  );
};

export default Shop;
