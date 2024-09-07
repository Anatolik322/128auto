import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import usePostItem from "../../hooks/PostItem";
import useCartStore from "../../zustand/store";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

const OrderForm = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [branchNumber, setBranchNumber] = useState("");
  const { data, isLoading, isError, postData } = usePostItem("/email_order");
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\+?3?8?(0\d{9})$/.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      toast.error("Будь ласка, введіть коректний Email.");
      return;
    }

    if (!validatePhone(phone)) {
      toast.error("Будь ласка, введіть коректний номер телефону.");
      return;
    }

    const orderData = {
      lastName,
      firstName,
      middleName,
      email,
      phone,
      address,
      branchNumber,
      cart,
    };

    try {
      await postData(orderData);
      setAddress("");
      setBranchNumber("");
      setEmail("");
      setFirstName("");
      setLastName("");
      setMiddleName("");
      setPhone("");
      clearCart();
      navigate("/thanks");
      toast.success("Замовлення успішно оформлено!");
    } catch (error) {
      toast.error("Сталася помилка під час оформлення замовлення.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mb-5 p-4 bg-white shadow-md rounded-lg relative !mt-[120px]">
      {isLoading ? (
        <div className="w-full h-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <ReactLoading
            type="cylon"
            color="#f2f2f2"
            height={100}
            width={100}
            className="mx-auto mt-5 w-20"
          />
        </div>
      ) : null}
      <h2 className="text-xl font-bold mb-4 text-black">
        Оформлення замовлення
      </h2>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div>
          <label className="block text-gray-700">Прізвище:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Ім'я:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">По батькові:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-gray-700">Email:</label>
          <input
            type="email"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Телефон:</label>
          <input
            type="tel"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Адреса:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-gray-700">Номер відділення:</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            value={branchNumber}
            onChange={(e) => setBranchNumber(e.target.value)}
            required
          />
        </div>
        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"
          >
            Оформити замовлення
          </button>
        </div>
      </form>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default OrderForm;
