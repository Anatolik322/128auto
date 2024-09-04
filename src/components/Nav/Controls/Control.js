import './Control.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import Cart from '../../Card/Cart/Cart';
import useCartStore from '../../../zustand/store';

const Control = () => {
    const cart = useCartStore((state) => state.cart);

    return (
        <div className="control__bar__container">
            <div className="controls__container">
                <div className="control">
                    <Link to="/account/login">
                        <PersonOutlineIcon color="black" size="large" sx={{ width: '35px' }} />
                    </Link>
                </div>

                <div className="control relative">
                    {
                        cart.length > 0 ? <div className='!w-4 !h-4 rounded-full bg-red-600 absolute top-0 left-[5px] text-white flex justify-center items-center z-10 text-sm'>{cart.length}</div> : null
                    }
                    <Link to="/cart">
                        <Cart />
                    </Link>
                </div>

            </div>
        </div>
    );
}

export default Control;