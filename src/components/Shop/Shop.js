import { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const Shop = () => {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="lg:flex w-11/12 mx-auto p">
      <div className="basis-3/4 mt-10">
        <div className="lg:grid lg:grid-cols-3  gap-4">
          {products.map((pd) => (
            <Product key={pd.id} product={pd} handleCart={handleAddToCart} />
          ))}
        </div>
      </div>
      <div className="basis-1/4 lg:ml-10">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
