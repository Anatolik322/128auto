import Navbottom from '../Nav/Nav-Links/NavLinks';
import Navtop from '../Nav/Container/Container';
import './Header.css'

const Header = () => {
    return (
        <header className='header__container'>
            <Navtop />
            <Navbottom />
        </header>
    );
}

export default Header;