import React from 'react'
import { Link } from 'react-router-dom'

import pic from "../assets/LOGO.png"

export default function LandingPage() {
    return (
        <header style={ HeaderStyle }>
            <div className="buttons text-center">
                <Link to="/login">
                    <button className="primary-button">log in</button>
                </Link>
                <Link to="/register">
                    <button className="primary-button" id="reg_btn"><span>register </span></button>
                </Link>
                <Link to="/productdetails">
                    <button className="primary-button">ProductDetails</button>
                </Link>
                <Link to="/address">
                    <button className="primary-button">Address</button>
                </Link>
            </div>
        </header>
    )
}

const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url(${pic})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover"
}