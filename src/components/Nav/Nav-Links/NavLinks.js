import { Link } from 'react-router-dom';
import './NavLinks.css'
import useFetchItems from '../../../hooks/FetchItemsHook';

const NavLinks = () => {
    const { data } = useFetchItems('/items/categories');
    console.log('data', data)
    return (
        <nav className="nav__bottom__container">
            <div className="bottom__container">
                <ul className="nav">
                    {data && data.map((item, id) => {
                        return <li className='nav-link' key={id}><Link to={`/category/${item?.category}`}>{item?.categoryUkr}</Link></li>
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default NavLinks;