import React from "react";
import useCartStore from "../../zustand/store";
import CartCard from "../Card/Cart/CartCard/CartCard";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function Cart() {
  const cart = useCartStore((state) => state.cart);

  const orderSum = () => {
    let sum = 0;
    if (cart) {
      cart?.map((item) => {
        if (item.discountedPrice) {
          sum += item.discountedPrice * item.quantity;
        } else {
          sum += item.price * item.quantity;
        }
      });
      return sum;
    }
    return 0;
  };

  return (
    <div className="sm:hd-[100vh] h-fit mt-[120px]">
      {cart?.length > 0 && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-[100px] w-[80%] mx-auto">
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
            <span className="text-sm italic mt-3">
              *Оплата тільки у відділенні Нової Пошти
            </span>
          </Link>
        </div>
      )}
      {cart.length ? (
        <div className=" grid sm:grid-cols-2 grid-cols-1 fldex flex-row flex-wrap gap-[15px] justify-start py-10 px-4">
          {cart.map((item) => {
            return <CartCard product={item} key={item?._id || Math.random()} />;
          })}
        </div>
      ) : (
        <div className="h-[100vh] text-white flex items-center gap-3 pt-14 text-4xl mt-10 flex-col">
          Корзина порожня!
          <Link to="/">
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#f28a0a",
                "&:hover": {
                  backgroundColor: "rgba(242, 138, 10, 0.7)",
                },
              }}
            >
              На головну
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
