import './control2.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';

import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';
const Footer = () => {
    return ( 
        <footer>
            
                    <div className="footer__social__link__container">
                        <div className="footer__social__link__header">
                            
                        </div>
                    <ul className="footer__social__links">
                            <li className="social__link">
                            <a href="https://twitter.com/" ><TwitterIcon /></a>
                            </li>
                            <li className="social__link">
                            <a href="https://twitter.com/" > <InstagramIcon /></a>
                            </li>
                            <li className="social__link">
                            <a href="https://twitter.com/" > <YouTubeIcon /></a>
                            </li>
                            <li className="social__link">
                            <a href="https://twitter.com/" > <TelegramIcon /></a>
                            </li>
                            <li className="social__link">
                            <a href="https://twitter.com/" >  <PinterestIcon /></a>
                            </li>
                        </ul>
                </div>
                

            
        </footer>
     );
}
 
export default Footer;