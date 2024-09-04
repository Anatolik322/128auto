import { Fragment, useContext, useState } from 'react';
import { CartItemsContext } from '../../../Context/CartItemsContext';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import CartCard from './CartCard/CartCard';
import './Cart.css'
import Button from '@mui/material/Button';
import axios from 'axios';

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