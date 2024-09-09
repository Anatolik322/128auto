import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh] bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md text-center">
        <h1 className="text-2xl font-bold text-[#F28A0A] mb-4">
          Дякуємо за ваше замовлення!
        </h1>
        <p className="text-gray-700 mb-4">
          Ваше замовлення успішно оформлено. Ми надішлемо вам повідомлення з
          деталями на електронну пошту.
        </p>
        <p className="text-gray-700 mb-4">
          Якщо у вас виникли запитання, звертайтеся до нашої служби підтримки.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#F28A0A] text-white px-6 py-2 rounded-lg shadow-md hover:bg-[#fcaa46] transition-all"
        >
          Повернутися до магазину
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
