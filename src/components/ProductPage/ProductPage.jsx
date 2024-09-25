import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchItems from "../../hooks/FetchItemsHook";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useCartStore from "../../zustand/store";
import { toast, ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";
import Carousel from "react-bootstrap/Carousel";
import "./index.css";
import ItemCard from "../Card/ItemCard/ItemCard";
import { useMediaQuery } from "react-responsive";

const ProductPage = () => {
	const { id } = useParams();

	const addProduct = useCartStore(
		(state) => state.addProduct
	);

	const [isExpanded, setIsExpanded] = useState(false);

	const getShortDescription = (text) => {
		return text.length > 200
			? text.slice(0, 200) + "..."
			: text;
	};

	const addToCart = (item) => {
		toast.success("Товар додано в корзину!", {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			progress: undefined,
		});
		addProduct(item);
	};

	const { data: product, isLoading } = useFetchItems(
		`/items/${id}`
	);

	const {
		data: similarProducts,
		isLoading: isLoadingSimilar,
	} = useFetchItems(
		`/semilar/${product?.category ? product?.category : "chemistry"}`
	);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [product]);

	const chunkArray = (array, chunkSize) => {
		const result = [];
		if (array) {
			for (
				let i = 0;
				i < array.length;
				i += chunkSize
			) {
				result.push(array.slice(i, i + chunkSize));
			}
			return result;
		}
	};
	let groupedProducts;
	if (useMediaQuery({ query: "(max-width: 767px)" })) {
		groupedProducts = chunkArray(similarProducts, 1);
	} else {
		groupedProducts = chunkArray(similarProducts, 3);
	}

	if (isLoading) {
		return (
			<div className="h-[850px]">
				<ReactLoading
					type="cylon"
					color="#f28a0a"
					height={100}
					width={100}
					className="m-auto mt-[250px]"
				/>
			</div>
		);
	}

	return (
		<>
			<div className="container mx-auto px-4 py-8 my-[100px]">
				<ToastContainer />
				{isLoading ? (
					<ReactLoading
						type="cylon"
						color="#f2f2f2"
						height={100}
						width={100}
						className="mx-auto mt-[100px] w-20 z-20"
					/>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="product-image flex justify-center sm:max-h-[550px] max-h-[590px]">
							<Carousel slide={false}>
								{product.images.map(
									(image, index) => {
										return (
											<Carousel.Item
												key={index}
											>
												<img
													className="d-block w-100"
													src={
														image
													}
													alt={`Фото ${index + 1}`}
													style={{
														maxHeight:
															"500px",
														objectFit:
															"cover",
														transform:
															"none",
													}}
													title="фото автотовару"
													height="500"
													width="500"
													loading="eager"
												/>
											</Carousel.Item>
										);
									}
								)}
							</Carousel>
						</div>

						<div className="product-details">
							<h2 className="text-3xl font-bold mb-4 text-white">
								{product.name}
							</h2>
							<div
								className="text-xl text-gray-200 mb-2"
								dangerouslySetInnerHTML={{
									__html: isExpanded
										? product.description
										: getShortDescription(
												product.description
											),
								}}
							></div>
							{product.description.length >
								200 && (
								<button
									onClick={() =>
										setIsExpanded(
											!isExpanded
										)
									}
									className="text-blue-500 mb-2"
								>
									{isExpanded
										? "Сховати"
										: "Більше..."}
								</button>
							)}
							<p className="text-2xl text-orange-500 font-bold mb-6">
								{product.discountedPrice ? (
									<div className="flex flex-row gap-1 items-center">
										<h3 className="line-through text-gray-400 text-xl w-fit">
											{product.price}{" "}
											грн
										</h3>
										<h3 className="ml-2.5 text-orange-600">
											{
												product.discountedPrice
											}{" "}
											грн
										</h3>
									</div>
								) : (
									<h2 className=" text-gray-200">{`${product.price} грн`}</h2>
								)}
							</p>
							<Button
								variant="contained"
								color="primary"
								sx={{
									backgroundColor:
										"#f28a0a",
									width: "90%",
									margin: "0 auto",
									height: "42px",
									marginBottom: "15px",
									"&:hover": {
										backgroundColor:
											"rgba(242, 138, 10, 0.7)",
									},
								}}
								startIcon={
									<AddShoppingCartIcon />
								}
								onClick={() => {
									addToCart(product);
								}}
							>
								Додати в корзину
							</Button>
							<div className="reviews mt-5">
								<h2 className="text-2xl font-semibold mb-4 text-gray-200 ">
									Відгуки
								</h2>
								{product.reviews?.length ? (
									<ul className="space-y-4 text-gray-200  !pl-2">
										{product.reviews.map(
											(review) => (
												<li
													key={
														review._id
													}
													className="border-b pb-4"
												>
													<p className="text-lg font-semibold">
														{
															review.user
														}
													</p>
													<p>
														{
															review.comment
														}
													</p>
													<div className="flex items-center">
														{Array.from(
															{
																length: 5,
															},
															(
																_,
																index
															) => (
																<svg
																	key={
																		index
																	}
																	className={`w-5 h-5 ${index < review.rate ? "text-[#F28A0A]" : "text-gray-300"}`}
																	xmlns="http://www.w3.org/2000/svg"
																	fill="currentColor"
																	viewBox="0 0 20 20"
																>
																	<path d="M10 15l-5.878 3.09 1.12-6.536L0 6.464l6.586-.955L10 0l2.414 5.509L19 6.464l-5.242 4.09 1.12 6.536L10 15z" />
																</svg>
															)
														)}
													</div>
												</li>
											)
										)}
									</ul>
								) : null}
							</div>
						</div>
					</div>
				)}
			</div>
			<div className="col-span-2 mb-5">
				<h2 className=" text-gray-200 w-fit mx-auto pb-2">
					Схожі товари
				</h2>

				{isLoadingSimilar ? (
					<ReactLoading
						type="cylon"
						color="#f2f2f2"
						height={100}
						width={100}
						className="mx-auto mt-[100px] w-20 z-20"
					/>
				) : (
					<Carousel slide={false}>
						{groupedProducts?.map(
							(group, index) => (
								<Carousel.Item key={index}>
									<div className="flex flex-wrap justify-center gap-10">
										{group?.map(
											(item) => (
												<div
													key={
														item.id
													}
												>
													<ItemCard
														item={
															item
														}
														category={
															item.category
														}
													/>
												</div>
											)
										)}
									</div>
								</Carousel.Item>
							)
						)}
					</Carousel>
				)}
			</div>
		</>
	);
};

export default ProductPage;
