import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className=" mx-auto mt-10 bg-gray-100 rounded-lg shadow-md p-6">
      <h1 className=" text-4xl text-center font-bold mb-6">Cart</h1>

      <div className="w-full mx-auto lg:w-8/12 xl:w-6/12 bg-white p-6 rounded-lg shadow-lg">
        <button
          className="w-3/12 py-2 mb-2 bg-blue-500 text-white rounded-lg hover:bg-purple-700 transition-colors"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 ?(
          <h1 className="text-xl text-center text-gray-700">
            Cart is empty add Items to the cart!
          </h1>
        ) : (
        <ItemList items={cartItems} />

        )}
      </div>
    </div>
  );
};

export default Cart;
