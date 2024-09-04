import { Fragment } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import './Cart.css'


const Cart = () => {
    return (
        <Fragment>
            <Badge color="error">
                <ShoppingCartIcon color="black" sx={{ width: '35px' }} />
            </Badge>
        </Fragment>
    );
}

export default Cart;