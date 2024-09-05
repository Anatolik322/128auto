
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './ItemCard.css'
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import useCartStore from "../../../zustand/store";
import { toast, ToastContainer } from "react-toastify";
import Image from "../../../asset/1122.jpg"
import { Link } from 'react-router-dom';


const ItemCard = (props) => {

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
    }

    return (

        <Card sx={{ maxWidth: 345, margin: '0 auto', borderRadius: 2, boxShadow: 3, bgcoloddr: "#A9A9A9" }}>
            <ToastContainer />
            <Link to={`/item/${props.item._id}`}>
                <CardMedia
                    component="img"
                    height="200"
                    // image={'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-1080x675.jpg'}
                    image={Image}
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
                        {props.item.description}
                    </Typography>
                    <Typography variant="h6" color="text.primary" mt={2}>
                        ${props.item.price}
                    </Typography>
                </CardContent>
            </Link>
            <CardActions>
                <Button variant="contained" color="primary" sx={{
                    backgroundColor: '#f28a0a', '&:hover': {
                        backgroundColor: 'rgba(242, 138, 10, 0.7)',
                    },
                }} startIcon={<AddShoppingCartIcon />}
                    onClick={() => {
                        addToCart(props.item)
                    }}>
                    Додати в корзину
                </Button>
            </CardActions>
        </Card>
    );
};

export default ItemCard;
