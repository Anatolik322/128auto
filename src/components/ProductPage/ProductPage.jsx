import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useFetchItems from "../../hooks/FetchItemsHook";
import noImage from "../../asset/1122.jpg";
import { Button } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useCartStore from "../../zustand/store";
import { toast, ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";

const ProductPage = () => {
  const { id } = useParams();

  const addProduct = useCartStore((state) => state.addProduct);

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

  const { data: product, isLoading } = useFetchItems(`/items/${id}`);

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
    <div className="container mx-auto px-4 py-8 my-[100px]">
      <ToastContainer />
      {isLoading ? (
        <ReactLoading
          type="cylon"
          color="#f2f2f2"
          height={100}
          width={100}
          className="mx-auto mt-5 w-20"
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="product-image flex justify-center">
            <img
              src={product.images[0] || noImage}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </div>

          <div className="product-details">
            <h1 className="text-3xl font-bold mb-4 text-white">
              {product.name}
            </h1>
            <p className="text-xl text-gray-200 mb-4">{product.description}</p>
            <p className="text-2xl text-orange-500 font-bold mb-6">
              {product.price} грн
            </p>
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#f28a0a",
                width: "90%",
                margin: "0 auto",
                height: "42px",
                marginBottom: "15px",
                "&:hover": {
                  backgroundColor: "rgba(242, 138, 10, 0.7)",
                },
              }}
              startIcon={<AddShoppingCartIcon />}
              onClick={() => {
                addToCart(product);
              }}
            >
              Додати в корзину
            </Button>
            <div className="reviews">
              <h2 className="text-2xl font-semibold mb-4 text-gray-400 ">
                Відгуки
              </h2>
              {product.reviews?.length ? (
                <ul className="space-y-4 text-gray-400 ">
                  {product.reviews.map((review) => (
                    <li key={review.id} className="border-b pb-4">
                      <p className="text-lg font-semibold">{review.user}</p>
                      <p>{review.comment}</p>
                      {/* <p className="text-sm text-gray-500">{review.date}</p> */}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>Немає відгуків</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;