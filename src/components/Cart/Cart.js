import {
  faArrowRightLong,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = ({ cart }) => {
  return (
    <div className="bg-orange-200 p-7">
      <h1 className="text-3xl font-semibold text-center">Order Summery</h1>
      <div className="text-xl my-10 ">
        <p>Selected Items: {cart.length}</p>
        <p className="my-4">Total Price: $0</p>
        <p>Total Shipping Charge: $5</p>
        <p className="my-4">Tax: $114</p>
      </div>
      <h3 className="text-2xl font-semibold mb-12">Grand Total: $1559</h3>

      <button className="btn btn-wide hover:bg-red-500 bg-red-500 border-0">
        Clear Cart
        <span className="ml-2">
          <FontAwesomeIcon icon={faTrashCan} size="lg" />
        </span>
      </button>
      <button className="btn btn-wide hover:bg-orange-400 my-4 border-0 bg-orange-400">
        Review Order
        <span className="ml-2">
          <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
        </span>
      </button>
    </div>
  );
};

export default Cart;
