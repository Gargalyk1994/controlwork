import  { NavLink } from "react-router-dom";
import  search  from "../assets/images/search.svg";
import  cart  from "../assets/images/cart.svg";
import  profile  from "../assets/images/profile.svg";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
    return (
        <>
            <header className="header">
                <section className="navigation">
                    <div className="container">
                        <nav className="navigation__box">
                            <div className="navigation__left-block">
                                <NavLink to="/">
                                    <svg width="44.000000" height="38.000000" viewBox="0 0 44 38" fill="#000000" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" >
                                        <pattern id="pattern_190_14420" patternContentUnits="objectBoundingBox" width="1.000000" height="1.000000">
                                            <use xlinkHref="#image190_1442_0" transform="matrix(0.022727,0,0,0.026316,0,0)"/>
                                        </pattern>
                                        <image id="logotype" width="44.000000" height="38.000000" xlinkHref="data:image/png;base64,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"/>
                                        <rect width="44.000000" height="38.000000" fill="url(#pattern_190_14420)" fillOpacity="1.000000"/>
                                    </svg>
                                </NavLink>
                                <button className="navigation__search">
                                    <img src={search} alt="Search" className="navigation__search-icon"/>
                                </button>
                            </div>
                            <div className="navigation__right-block">
                                <a href="#" className="navigation__menu">
                                    <span className="navigation__menu-icon"></span>
                                    <span className="navigation__menu-icon"></span>
                                    <span className="navigation__menu-icon"></span>
                                </a>
                                <a href="#" className="navigation__profile">
                                    <img src={profile} alt="Profile" className="navigation__profile-icon"/>
                                </a>
                                <NavLink to="/cart" className="navigation__cart">
                                    <img src={cart} alt="Cart" className="navigation__cart-icon"/>
                                </NavLink>
                                <span className="navigation__count-cart">5</span>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className="main-block">
                    <HamburgerMenu />
                </section>
            </header>
        </>
    );
}

export default Header;