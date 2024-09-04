import './Landing.css'
import land from '../../asset/brand/men2.png'
import { Link } from "react-router-dom"
import { Button } from "@mui/material";
import vacum from "./test.png"

const Landing = () => {
    return (
        <div className="landing__container">
            <div className="landing__header__container w-[92%]">
                <div className="landing__header">
                    <h3 className="landing__header__discount font-bold">До 15% знижки</h3>
                    <h1 className="landing__header__main !text-[50px] !sm:text-[72px]">Прокачайте свій автомобіль разом з нами!</h1>
                    <Link to="/category/car_vacuums">
                        <Button variant='outlined' sx={[{ width: '190px', marginTop: '10px', height: '50px', borderRadius: '20px', fontWeight: '700', backgroundColor: 'none', borderColor: '#fff', color: '#fff', marginTop: '15px' }, { '&:hover': { backgroundColor: "white", color: "#F28A0A", borderColor: '#fff' } }]}>Перейти</Button>
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