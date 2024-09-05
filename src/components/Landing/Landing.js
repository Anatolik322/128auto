import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import './Landing.css'

import vacum from "./test.png"
import vacum1 from "./pylo2.png"
import vacum2 from "./k2.png"


const images = [vacum, vacum1, vacum2];

const Landing = () => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="landing__container">
            <div className="landing__header__container w-[92%]">
                <div className="landing__header pt-5">
                    <h3 className="landing__header__discount font-bold">До 15% знижки</h3>
                    <h1 className="landing__header__main !text-[40px] !sm:text-[72px]">
                        Прокачайте свій автомобіль разом з нами!
                    </h1>
                    <Link to="/category/car_vacuums">
                        <Button
                            variant="outlined"
                            sx={[
                                {
                                    width: "190px",
                                    height: "50px",
                                    borderRadius: "20px",
                                    fontWeight: "700",
                                    backgroundColor: "none",
                                    borderColor: "#fff",
                                    color: "#fff",
                                    marginTop: "15px",
                                },
                                {
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: "#F28A0A",
                                        borderColor: "#fff",
                                    },
                                },
                            ]}
                        >
                            Перейти
                        </Button>
                    </Link>
                </div>
            </div>
            <div className="landing__image__container flex justify-center !h-[600px] !pt-[100px] p-[50px]">
                <img
                    className="landing__image transition-opacity duration-1000 ease-in-out !h-[400px] "
                    src={images[currentImage]}
                    alt="car vacuum"
                />
            </div>
        </div>
    );
};

export default Landing;
