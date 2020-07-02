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
                <a href ="" className="logo">Sujatha</a>
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

// function NavTabs (){
//     const location = useLocation()
//     return(
//         <ul className = 'navbar'>
//             <li className = 'nav-item'>
//                 <Link to = '/' className = {location.pathname === '/'  ? 'nav-link active' : 'nav-link'}>Home</Link>
//             </li>
//             <li className = 'nav-item'>
//                 <Link to = '/about' className = {location.pathname === '/about'  ? 'nav-link active' : 'nav-link'}>About Me</Link>
//             </li>
//             <li className = 'nav-item'>
//                 <Link to = '/portfolio' className = {location.pathname === '/portfolio'  ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
//             </li>
//             <li className = 'nav-item'>
//                 <Link to = '/contact' className = {location.pathname === '/contact'  ? 'nav-link active' : 'nav-link'}>Contact</Link>
//             </li>
//         </ul>
//     )
// }

// export default NavTabs