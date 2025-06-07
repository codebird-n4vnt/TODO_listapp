import React from "react";

import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo navElement">
          <Link to='/' ><li>iTask</li></Link>
        </div>
        <div className="links navElement">
  
         <NavLink to='/contact' className={(e) => e.isActive?"active":""}><span>Contact Us</span></NavLink>
         <NavLink to='/about' className={(e) => e.isActive?"active":""}><span>About</span></NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
