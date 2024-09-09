import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCard.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import useCartStore from "../../../zustand/store";
import { toast, ToastContainer } from "react-toastify";
import Image from "../../../asset/1122.jpg"
import { Link } from 'react-router-dom';

const ItemCard = (props) => {
    const { addProduct, cart } = useCartStore((state) => ({
        addProduct: state.addProduct,
        cart: state.cart,
    }));

    const checkItemInCart = (id) => cart.some((item) => item._id === id);
    const addToCart = (product) => {
        toast.success("Товар додано в корзину!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });

        addProduct(product);
    };
    console.log(props);

    return (
        <Card sx={{ maxWidth: 345, margin: '0 auto', borderRadius: 2, boxShadow: 3 }}>
            {/* <ToastContainer /> */}
            <Link to={`/item/${props.item._id}`}>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.item.images[0]}
                    alt={props.item.name}
                />
            </Link>
            <Link to={`/item/${props.item._id}`}>
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props.item.name.length > 25
                            ? props.item.name.slice(0, 25) + '...'
                            : props.item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.item.description.length > 100
                            ? <div
                                className=""
                                dangerouslySetInnerHTML={{
                                    __html: props.item.description.slice(0, 100) + '...',
                                }}
                            ></div>
                            : props.item.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary" mt={2}>
                        <div className="mt-1 text-xl text-black">
                            {props.item.discountedPrice ? (
                                <div className='flex flex-row gap-1 items-center'>
                                    <h6 className="line-through text-gray-400 text-xl w-fit">{props.item.price} грн</h6>
                                    <h4 className="ml-2.5 text-orange-600">{props.item.discountedPrice} грн</h4>
                                </div>
                            ) : (
                                <h4>{`${props.item.price} грн`}</h4>
                            )}
                        </div>
                        {/* {props.item.price} грн. */}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions className=' !justify-between !px-5'>
                <Button variant="contained" color="primary" sx={{
                    backgroundColor: '#f28a0a', '&:hover': {
                        backgroundColor: 'rgba(242, 138, 10, 0.7)',
                    },
                }} startIcon={<AddShoppingCartIcon />}
                    onClick={() => addToCart(props.item)}>
                    Додати в корзину
                </Button>
                <svg
                    fill={
                        checkItemInCart(props.item._id)
                            ? "#f28a0a" : "#000"}
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36px"
                    height="36px"
                    viewBox="0 0 902.86 902.86"
                    xmlSpace="preserve"
                >
                    <g>
                        <path d="M671.504,577.829l110.485-432.609H902.86v-68H729.174L703.128,179.2L0,178.697l74.753,399.129h596.751V577.829z M685.766,247.188l-67.077,262.64H131.199L81.928,246.756L685.766,247.188z" />
                        <path d="M578.418,825.641c59.961,0,108.743-48.783,108.743-108.744s-48.782-108.742-108.743-108.742H168.717 c-59.961,0-108.744,48.781-108.744,108.742s48.782,108.744,108.744,108.744c59.962,0,108.743-48.783,108.743-108.744 c0-14.4-2.821-28.152-7.927-40.742h208.069c-5.107,12.59-7.928,26.342-7.928,40.742 C469.675,776.858,518.457,825.641,578.418,825.641z M209.46,716.897c0,22.467-18.277,40.744-40.743,40.744 c-22.466,0-40.744-18.277-40.744-40.744c0-22.465,18.277-40.742,40.744-40.742C191.183,676.155,209.46,694.432,209.46,716.897z M619.162,716.897c0,22.467-18.277,40.744-40.743,40.744s-40.743-18.277-40.743-40.744c0-22.465,18.277-40.742,40.743-40.742 S619.162,694.432,619.162,716.897z" />
                    </g>
                </svg>
            </CardActions>
        </Card>
    );
};

export default ItemCard;
