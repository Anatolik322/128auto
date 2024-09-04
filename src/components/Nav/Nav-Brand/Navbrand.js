import './NavBrand.css'
import { Link } from 'react-router-dom';
import logo from "./logo.png"
const NavBrand = () => {
    return (
        <div href="#home" className='navbrand__containers !w-fit'>
            <div className=' text-[30px] text-[#302626] !w-fit'>
                <Link to="/"><img src={logo} className=' h-[40px]'></img></Link>
            </div>
        </div>
    );
}

export default NavBrand;