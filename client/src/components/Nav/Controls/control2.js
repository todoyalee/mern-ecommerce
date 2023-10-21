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
        <footer>
            
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            <h1>Stay Connected</h1>
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
                

            
        </footer>
     );
}
 
export default Footer;