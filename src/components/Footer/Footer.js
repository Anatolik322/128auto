import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
    return (
        <footer className=' absolufte bottjom-[0px] w-full'>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header">
                            <h1>Допомога</h1>
                        </div>
                        <ul className="fotter__help__links">
                            <li className="help__link">
                                <a href="/"> Доставка та оплата</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Інформація про нас</a>
                            </li>
                            <li className="help__link">
                                <a href="/">Часті запитання</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Контакти</h1>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+123 4567 890</span>
                            </li>
                            <li className="footer__contact flex flex-row gap-2">
                                <EmailIcon /> <span>128packworks@gmail.com</span>
                            </li>
                            <li className="footer__contact">
                                <LocationOnIcon /> <span>Львів, Україна</span>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header">
                            <h1>Соцмережі</h1>
                        </div>
                        <ul className="footer__social__links">
                            <li className="social__link">
                                <TwitterIcon />
                            </li>
                            <li className="social__link">
                                <InstagramIcon />
                            </li>
                            <li className="social__link">
                                <YouTubeIcon />
                            </li>
                            <li className="social__link">
                                <TelegramIcon />
                            </li>
                            <li className="social__link">
                                <PinterestIcon />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fotter__copyright__container">
                    <ul className='nav'>
                        <li className="footer__copyright">©2022 Shema Ltd. |</li>
                        <li className="footer__terms__condition"> | Terms & Condition |</li>
                        <li className="footer__privacy__policy">| Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;