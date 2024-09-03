import './Landing.css'
import land from '../../asset/brand/men2.png'
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import vacum from "../../asset/abc.png"

const Landing = () => {
    return (
        <div className="landing__container">
            <div className="landing__header__container">
                <div className="landing__header">
                    <h3 className="landing__header__discount">UP TO 15% DISCOUNT</h3>
                    <h1 className="landing__header__main">Unleash the Power of Clean with Our Car Vacuum Cleaner!</h1>
                    <Link to="/shop">
                        <Button variant='outlined' sx={[{ width: '190px', marginTop: '10px', height: '50px', borderRadius: '20px', fontWeight: '700', backgroundColor: 'none', borderColor: '#fff', color: '#fff' }, { '&:hover': { backgroundColor: "white", color: "#F28A0A", borderColor: '#fff' } }]}>SHOP NOW</Button>
                    </Link>
                </div>
            </div>
            <div className="landing__image__container">
                <img className="landing__image " src={vacum} alt="car vacuum" />
            </div>
        </div>
    );
}

export default Landing;