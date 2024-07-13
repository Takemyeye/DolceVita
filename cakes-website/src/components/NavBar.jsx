import React from "react";
import './styles/navBar.css';
import { Link } from "react-router-dom";

const img = {
    logo: "img/DolceVita-logo.png"
}

const NavBar = () => {

    return(
        <header>
            <div className="logo">
                <img src={img.logo} alt="server error" />
            </div>
            <div className="nav-container">
                <span> Catalog </span>
                <span> Cake </span>
                <Link to="#">
                    <span> Contact Us </span>
                </Link>
            </div>
        </header>            
    );
};

export default NavBar;
