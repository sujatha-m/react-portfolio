import React from "react";
import "../../App.css"
import NavTabs from "../NavTabs";
import Container from "../Container";

function Header (){
    return(
        <header>
            <Container />
            <div className="row">
            <div className="brand-name">
            <a href ="/react-portfolio" className="logo">Sujatha</a>
            </div>
            <div className="ham-burger">
               <i className= "fa fa-bars"></i> 
            </div>
            <NavTabs />
        </div>
    </header>
    )
}

export default Header;

