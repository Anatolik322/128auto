import React, { useState } from "react";
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
	const [code, setCode] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [branchNumber, setBranchNumber] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const { isLoading, postData } = usePostItem("/email_order");
	const { data: promoData, postData: promoPostData } = usePostItem("/promo");
	const { isLoading: isloadPost, postData: postDataToDB } = usePostItem("/order");
	const { isLoading: isLoadData, postData: userPostData } = usePostItem("/send_thank_you_email");
	const cart = useCartStore((state) => state.cart);
	const clearCart = useCartStore((state) => state.clearCart);
	const navigate = useNavigate();

	const validateEmail = (email) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateEmail(email)) {
			toast.error("Будь ласка, введіть коректний Email.");
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
			discount: promoData || null,
		};

		const userOrderDetails = {
			firstName: firstName,
			lastName: lastName,
			middleName: middleName,
			email: email,
			phone: phone,
			address: address,
			branchNumber: branchNumber,
			cart: cart,
		};

		const postToDb = {
			items: cart,
			firstName: firstName,
			lastName: lastName,
			fatherName: middleName,
			city: address,
			street: address,
			postNumber: branchNumber,
		};

		try {
			await postData(orderData);
			await postDataToDB(postToDb);
			await userPostData(userOrderDetails);
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

	const validatePromo = async (code) => {
		try {
			const res = await promoPostData({ code: code });
			toast.success(`Промокод на ${promoData.promo.amount}грн. успішно застосовано!`);
		} catch (error) {
			toast.error("Такий промокод вже використано, або його не існує");
		}
	};
	return (
		<div className="sm-w-[70%] w-[350px] mx-auto mb-5 p-4 bg-white shadow-md rounded-lg relative !mt-[120px]">
			{isLoading || isLoadData || isloadPost ? (
				<div className="w-full h-full absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<ReactLoading type="cylon" color="#f2f2f2" height={100} width={100} className="mx-auto mt-5 w-20" />
				</div>
			) : null}
			<h2 className="text-xl font-bold mb-4 text-black">Оформлення замовлення</h2>
			<form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
				<div className="sm:col-span-1">
					<label className="block text-gray-700">Номер відділення:</label>
					<input
						type="text"
						className="w-full p-2 border border-gray-300 rounded mt-1"
						value={branchNumber}
						onChange={(e) => setBranchNumber(e.target.value)}
						required
					/>
				</div>
				<div className="sm:col-span-1 ">
					{!isOpen ? (
						<p className="text-orange-600 cursor-pointer hover:underline sm-mt-[50px] mt-1" onClick={() => setIsOpen(true)}>
							Використати сертифікат
						</p>
					) : (
						<>
							<label className="block text-gray-700">Номер сертифікату</label>
							<div className="flex flex-row items-center gap-3">
								<input
									type="text"
									className="w-full p-2 border border-gray-300 rounded mt-1"
									value={code}
									onChange={(e) => setCode(e.target.value)}
								/>
								<button
									type="button"
									onClick={() => validatePromo(code)}
									className="bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 mt-2 px-3"
								>
									Активувати
								</button>
							</div>
						</>
					)}
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
			<ToastContainer />
		</div>
	);
};

export default OrderForm;
