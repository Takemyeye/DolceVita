import React from "react";
import './styles/navBar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp,  } from '@fortawesome/free-brands-svg-icons';

const img = {
    logo: "img/DolceVita-logo.png"
}

const NavBar = () => {

    return(
        <header>
            <div className="title">
                <img src={img.logo} alt="server error" />
            </div>
            <div className="nav-container">
                <span> Catalog </span>
                <Link to="/about">
                    <span >About </span>
                </Link>
                <span> Socium </span>
                <Link to="#">
                    <span> Contact Us </span>
                </Link>
            </div>
        </header>            
    );
};

export default NavBar;
