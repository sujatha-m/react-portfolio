import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";

function NavTabs (){
  const location = useLocation()
  return(
    <div>
      <ul className = 'navbar'>
          <li >
              <Link to = '/' className = {location.pathname === '/'  ? 'nav-link active' : 'nav-link'}>Home</Link>
          </li>
          <li>
              <Link to = '/about' className = {location.pathname === '/about'  ? 'nav-link active' : 'nav-link'}>About Me</Link>
          </li>
          <li >
              <Link to = '/portfolio' className = {location.pathname === '/portfolio'  ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
          </li>
          <li >
              <Link to = '/contact' className = {location.pathname === '/contact'  ? 'nav-link active' : 'nav-link'}>Contact</Link>
          </li>
      </ul>
      </div>
  )
}

export default NavTabs