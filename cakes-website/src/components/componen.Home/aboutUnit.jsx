import React from "react"
import { Link } from "react-router-dom";

export function AboutUnit ({text, link, component1, component2, component3}) {
    return (
        <div className="about-container">
            <h3 style={{ color: 'black' }}>{text}</h3>
            <Link to={link}>
                <h5>{component1}</h5>
            </Link>
            <Link to={link}>
                <h5>{component2}</h5>
        </Link>
            <Link to={link}>
                <h5>{component3}</h5>
            </Link>
        </div>
    )
}