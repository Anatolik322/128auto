import { Link } from 'react-router-dom';
import './NavLinks.css'
import useFetchItems from '../../../hooks/FetchItemsHook';
import ReactLoading from "react-loading";

const NavLinks = () => {
    const { data, isLoading } = useFetchItems('/items/categories');
    return (
        <nav className="nav__bottom__container !fixed w-full top-[55px]">
            <div className="bottom__container">
                <ul className="nav">
                    {
                        isLoading ?
                            <ReactLoading
                                type="cylon"
                                color="#f28a0a"
                                height={60}
                                width={100}
                                className="m-auto pb-5"
                            />
                            :
                            data && data.map((item, id) => {
                                return <li className='nav-link' key={id}><Link to={`/category/${item?.category}`}>{item?.categoryUkr}</Link></li>
                            })

                    }
                </ul>
            </div>
        </nav>
    );
}

export default NavLinks;