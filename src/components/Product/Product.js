const Product = (props) => {
  const { img, name, price, ratings, seller } = props.product;
  console.log(props);
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h3 className="text-lg font-semibold">Price: ${price}</h3>
        <p>Manufacturer : {seller}</p>
        <p>Rating: {ratings}</p>
      </div>
      <button className="bg-orange-200 py-2 font-semibold">Add To Card</button>
    </div>
  );
};

export default Product;
