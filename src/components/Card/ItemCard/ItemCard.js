import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartItemsContext } from "../../../Context/CartItemsContext";
import { WishItemsContext } from '../../../Context/WishItemsContext';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './ItemCard.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography, IconButton } from '@mui/material';
import useCartStore from "../../../zustand/store";
import { toast, ToastContainer } from "react-toastify";


const ItemCard = (props) => {
    const [isHovered, setIsHovered] = useState(false);
    const cartItemsContext = useContext(CartItemsContext);
    const wishItemsContext = useContext(WishItemsContext);

    const addProduct = useCartStore((state) => state.addProduct);
    const cart = useCartStore((state) => state.cart);

    return (
        <Card sx={{ maxWidth: 345, margin: '0 auto', borderRadius: 2, boxShadow: 3, bgcoloddr: "#A9A9A9" }}>
            <CardMedia
                component="img"
                height="200"
                image={'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'}
                alt={props.item.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                    {props.item.name.length > 25
                        ? props.item.name.slice(0, 25) + '...'
                        : props.item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.item.description}
                </Typography>
                <Typography variant="h6" color="text.primary" mt={2}>
                    ${props.item.price}
                </Typography>
            </CardContent>
            <CardActions>
                <IconButton aria-label="add to wishlist" color="primary">
                    <FavoriteBorderIcon />
                </IconButton>
                <Button variant="contained" color="primary" sx={{
                    backgroundColor: '#f28a0a', '&:hover': {
                        backgroundColor: 'rgba(242, 138, 10, 0.7)',
                    },
                }} startIcon={<AddShoppingCartIcon />}
                    onClick={() => {
                        addProduct(props.item);
                        toast.success("Товар додано в корзину!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        });
                    }}>
                    Додати в корзину
                </Button>
            </CardActions>
        </Card>
    );
};

export default ItemCard;
