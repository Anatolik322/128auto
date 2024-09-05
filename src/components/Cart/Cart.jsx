import React from "react";
import useCartStore from "../../zustand/store";
import CartCard from "../Card/Cart/CartCard/CartCard";
import { Link } from "react-router-dom";
function Cart() {
  const cart = useCartStore((state) => state.cart);

  const orderSum = () => {
    let sum = 0;
    if (cart) {
      cart?.map((item) => {
        console.log("eeeeeeeeeee", item);

        sum += item.price * item.quantity;
      });
      return sum;
    }
    return 0;
  };

  return (
    <div className="h-[100vh]">
      <div className="bg-white p-4 rounded-lg shadow-md mt-5 w-[80%] mx-auto">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-bold">Загальна сума:</span>
          <span className="text-xl font-semibold text-gray-800">
            {orderSum()} грн
          </span>
        </div>
        <Link to="/order">
          <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
            Оформити замовлення
          </button>
        </Link>
      </div>
      {cart.length ? (
        <div className=" grid sm:grid-cols-2 grid-cols-1 fldex flex-row flex-wrap gap-[15px] justify-start py-10 px-4">
          {cart.map((item) => {
            return <CartCard product={item} key={item?._id || Math.random()} />;
          })}
        </div>
      ) : (
        <div className="h-[100vh] text-white flex justify-center pt-14 text-4xl">
          Корзина порожня!
        </div>
      )}
    </div>
  );
}

export default Cart;
