import React from "react";
//import { Link, useLocation } from "react-router-dom";
import "../../App.css"
import NavTabs from "../NavTabs";
import Container from "../Container";

function Header (){
    return(
        <header>
            <Container />
        {/* <div className="container"> */}
            <div className="row">
            <div className="brand-name">
            <a href ="/#" className="logo">Sujatha</a>
            </div>
            <div className="ham-burger">
               <i className= "fa fa-bars"></i> 
            </div>
            <NavTabs />
        </div>
        {/* </div> */}
    </header>
    )
}

export default Header;

