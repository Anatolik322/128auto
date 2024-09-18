import './NavBrand.css'
import { Link } from 'react-router-dom';
import logo from "./logo.png"
import smalLogo from "./smalLogo.jpg"

const NavBrand = () => {
    return (
        <div href="#home" className='flex justify-center items-center !w-fit'>
            <div className=' text-[30px] text-[#302626] !w-fit sm:block hidden '>
                <Link to="/"><img src={logo} className=' h-[40px]' alt='128auto' width="125" height="40" title='128auto логотип' loading="eager"></img></Link>
            </div>
            <div className=' text-[30px] text-[#302626] !w-fit sm:hidden block '>
                <Link to="/"><img src={smalLogo} className=' h-[40px] ' alt='128auto' width="40" height="40" title='128auto логотип' loading="eager"></img></Link>
            </div>
        </div>
    );
}

export default NavBrand;