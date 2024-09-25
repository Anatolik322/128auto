import './Footer.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const Footer = () => {
    return (
        <footer className=' absolufte bottjom-[0px] w-full'>
            <div className="footer__container">
                <div className="footer__items__container">
                    <div className="footer__help__container">
                        <div className="footer__help__header mt-4">
                            <span>Допомога</span>
                        </div>
                        <ul className="fotter__help__links">
                            <li className="help__link">
                                <a href="/delivery"> Доставка та оплата</a>
                            </li>
                            <li className="help__link">
                                <a href="/about">Інформація про нас</a>
                            </li>
                            <li className="help__link">
                                <a href="/qestions">Часті запитання</a>
                            </li>

                        </ul>
                    </div>
                    <div className="footer__contact__container">
                        <div className="footer__contact__header mt-4">
                            <span>Контакти</span>
                        </div>
                        <ul className="footer__contacts">
                            <li className="footer__contact">
                                <LocalPhoneIcon /> <span>+380 980 898 033</span>
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
                        <div className="footer__contact__header mt-4">
                            <span>Соцмережі</span>
                        </div>
                        <ul className="footer__social__links">

                            <li className="social__link">
                                <a
                                    href='https://www.instagram.com/128_auto?igsh=OWFhZGtzcWo2cm8w'
                                    target='blank'
                                    className='text-[#212529]'>
                                    <InstagramIcon />
                                </a>
                            </li>

                            <li className="social__link">
                                <a
                                    href='https://t.me/manager_128auto'
                                    className='text-[#212529]'
                                    target='blank'>
                                    <TelegramIcon fill={'#212529'} />
                                </a>
                            </li>
                            <li>
                                <a
                                    target='blank'
                                    href='https://www.tiktok.com/@128_auto?_t=8poGOvFSlkr&_r=1&fbclid=PAZXh0bgNhZW0CMTEAAaZM7yVk7Otu1xIi-dpvKZbVTDb0fjv4Vrtuc4PrXZx_ruqrYj2RyRDkYgg_aem_pYjm3c1-8asYMkd4cDKXPQ' >
                                    <svg
                                        fill={'#212529'}
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 50 50"
                                        width="24px"
                                        height="24px"
                                        className='pt-1'
                                    >
                                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="fotter__copyright__container mt-4">
                    <ul className='nav'>
                        <li className="footer__copyright"><a href='https://www.128auto.shop/'>©2018 128auto Ltd. |</a></li>
                        <li className="footer__terms__condition"> | Terms & Condition |</li>
                        <li className="footer__privacy__policy">| Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </footer >
    );
}

export default Footer;