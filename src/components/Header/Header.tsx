import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { VscMenu, VscClose } from 'react-icons/vsc';
import logo from '../../assets/images/linkr-logo-3.png';
import MobileMenu from './MobileMenu/MobileMenu';
import './Header.scss';
import { Button } from '../Button/Button';


const Header:React.FC = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const handleMobileNav = () => {
        setMobileNav(!mobileNav);
    }
   
    return (
        <>
            <header className="header">
                <div className="header__main-content">
                    <div className="header__logo-container">
                        <div className="header__logo">
                            <Link to="/"><img src={logo} alt="logo" /></Link>
                        </div>
                    </div>
                    <div className="header__middle-menu"></div>
                    <div className="header__right-menu">
                        <div className="header__right-menu-item header__login"><Link to={'/'} className="header__login-link">Login</Link></div>
                        <div className="header__right-menu-item header__register"><Button className="button button--primary button--sm">Get Started</Button></div>
                        <div className="header__right-menu-item header__menu-bars" onClick={handleMobileNav}>{mobileNav ? <VscClose className="header__icon header__icon--close" /> : <VscMenu className="header__icon header__icon--menu" />}</div>
                    </div>

                </div>

                <div className={`header__mobile-content ${mobileNav && "header__mobile-content--open"}`}>
                <div className="header__mobile-menu">
                    {/* <div className="header__mobile-menu-item"><Link href={'#about'} className="header__mobile-menu-link">About</Link></div> */}
                    <div className="header__mobile-menu-item"><Link to={'/'} className="header__mobile-menu-link">Login</Link></div>
                    <div className="header__mobile-menu-item"><Button className="button button--primary button--md">Get Started</Button></div>
                </div>
            </div>

            </header>
           
        </>
    )
}

export default Header;