import './NavBrand.css'
import { Link } from 'react-router-dom';
import logo from "./logo.png"
const NavBrand = () => {
    return (
        <div href="#home" className='navbrand__containers !w-fit'>
            <div className=' text-[30px] text-[#302626] !w-fit'>
                <Link to="/"><img src={logo} className=' h-[40px]' alt='128auto' width="125" height="40" title='128auto логотип'></img></Link>
            </div>
        </div>
    );
}

export default NavBrand;