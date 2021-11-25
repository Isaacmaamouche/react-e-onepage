import React from "react";
import '../../css/Banner.scss';
const logo = './img/logo.png';
function Banner() {
    const title = "La maison jungle";
    return (
    <div className="lmj-banner">
        <img src={logo} alt={title} className="lmj-logo"/>
        <h1 className="lmj-title">{title}</h1>
    </div>
    );
}

export default Banner