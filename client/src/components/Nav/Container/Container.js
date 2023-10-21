import Control from '../Controls/Control';
import DrawerNav from '../DrawerNav/DrawerNav';
import NavBrand from '../Nav-Brand/Navbrand';
import Form from '../Search-Bar/Form';
import './Container.css'

const Navtop = () => {
    return ( 
            <div className="nav__top__container">
                                    <div className="control__bar">
                        <Control />
                    </div>
                    <div className="form__container">
                        <Form />
                    </div>
x
                    <div className="drawer">
                        <DrawerNav />
                    </div>
                </div>
            
     );
}
 
export default Navtop;