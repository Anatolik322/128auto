import Control from '../Controls/Control';
import DrawerNav from '../DrawerNav/DrawerNav';
import NavBrand from '../Nav-Brand/Navbrand';
import Form from '../Search-Bar/Form';
import './Container.css'
import { useMediaQuery } from "react-responsive";

const Navtop = () => {
    return (
        <div className="nav__top__container sm:px-4 px-2 fixed z-20 w-full bg-white top-0">
            {useMediaQuery({ query: "(max-width: 767px)" }) ?
                <div className="top__container flex flex-row items-center justify-between font-serif font-bold">
                    <NavBrand />
                    <div className="control__bar">
                        <Control />
                    </div>
                    <div className="search__drawer sm:block hiddden">
                        <Form />
                    </div>
                    <div className="drawer">
                        <DrawerNav />
                    </div>
                </div>
                :
                <div className="top__container flex flex-row items-center justify-between font-serif font-bold">
                    <NavBrand />
                    <div className="search__drawer sm:block hiddden">
                        <Form />
                    </div>
                    <div className="control__bar">
                        <Control />
                    </div>
                    <div className="drawer">
                        <DrawerNav />
                    </div>
                </div>
            }

        </div>
    );
}

export default Navtop;