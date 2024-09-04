import useCartStore from '../../../../zustand/store';
import './CartCard.css';


const CartCard = (props) => {
    console.log(props);

    const removeFromCart = useCartStore((state) => state.removeProduct);
    const handdleRemove = (productId) => {
        removeFromCart(productId);
    }
    return (
        <div className="flex justify-between items-center p-2.5  border border-gray-300 rounded-lg bg-white shadow-md ">
            <div className="flex items-center">
                <img
                    src={props.product.images[0]}
                    alt={props.product.name}
                    className="w-20 h-20 mr-3.5 object-cover rounded-lg"
                />
                <div className=' h-fit'>
                    <h3 className="mb-1 text-lg font-bold text-black">{props.product.name}</h3>
                    <p className="m-0 text-sm text-gray-600">Бренд: {props.product.brand}</p>
                    <p className="m-0 text-sm text-gray-600">Категорія: {props.product.categoryUkr}</p>
                    <p className="m-0 text-sm text-gray-600">Артикул: {props.product.sku}</p>
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
                <p className="mb-1 text-sm">Кількість: {props.product.quantity}</p>
                <button className="px-3 py-2 bg-orange-600 text-white border-none rounded cursor-pointer"
                    onClick={() => handdleRemove(props.product._id)}>
                    Видалити
                </button>
            </div>
        </div>

    );
}

export default CartCard;