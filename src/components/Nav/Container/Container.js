import Control from '../Controls/Control';
import DrawerNav from '../DrawerNav/DrawerNav';
import NavBrand from '../Nav-Brand/Navbrand';
import './Container.css'

const Navtop = () => {
    return (
        <div className="nav__top__container px-4 fixed z-20 w-full bg-white top-0">
            <div className="top__container flex flex-row items-center justify-between font-serif font-bold">
                <NavBrand />
                <h1 className=' text-black !m-0  sm:text-[18px] text-[12px] w-fit sm:block hidden'>Тільки для своїх</h1>
                <div className="control__bar">
                    <Control />
                </div>
                <div className="drawer">
                    <DrawerNav />
                </div>
            </div>
        </div>
    );
}

export default Navtop;