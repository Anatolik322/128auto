import { useState } from 'react';
import useCartStore from '../../../../zustand/store';
import './CartCard.css';

const CartCard = (props) => {
    const { updateQuantity, removeFromCart } = useCartStore((state) => ({
        updateQuantity: state.updateQuantity,
        removeFromCart: state.removeProduct
    }));

    const [quantity, setQuantity] = useState(props.product.quantity);

    const increaseQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        updateQuantity(props.product._id, newQuantity);
    };

    const decreaseQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            updateQuantity(props.product._id, newQuantity);
        }
    };


    const handleRemove = (id) => {
        removeFromCart(id);
    };

    return (
        <div className="flex justify-between items-center p-2.5  border border-gray-300 rounded-lg bg-white shadow-md">
            <div className="flex items-center">
                <img
                    src={props.product.images[0]}
                    alt={props.product.name}
                    className="w-20 h-20 mr-3.5 object-cover rounded-lg"
                    title='автотовар в корзині'
                    height="80"
                    width="80"
                    loading='eager'
                />
                <div className='h-fit'>
                    <h2 className="mb-1 text-lg font-bold text-black">{props.product.name}</h2>
                    <p className="m-0 text-sm text-gray-600">Бренд: {props.product.brand}</p>
                    <p className="mt-1 text-sm text-orange-600">
                        {props.product.discountedPrice ? (
                            <>
                                <span className="line-through text-gray-400">{props.product.price} грн</span>
                                <span className="ml-2.5">{props.product.discountedPrice} грн</span>
                            </>
                        ) : (
                            `${props.product.price} грн`
                        )}
                    </p>
                </div>
            </div>
            <div className="text-center">
                <div className="flex items-center gap-2 justify-between">
                    <button
                        className="bg-gray-200 px-2 py-1 w-7"
                        onClick={decreaseQuantity}
                        disabled={quantity === 1}
                    >
                        -
                    </button>

                    <span>{quantity}</span>

                    <button
                        className="bg-gray-200 px-2 py-1 w-7"
                        onClick={increaseQuantity}
                    >
                        +
                    </button>
                </div>
                {/* <p className="mb-1 text-sm">Кількість: {quantity}</p> */}
                <button className="px-3 py-2 mt-2 bg-orange-600 text-white border-none rounded cursor-pointer"
                    onClick={() => handleRemove(props.product._id)}>
                    Видалити
                </button>
            </div>
        </div>
    );
};

export default CartCard;
