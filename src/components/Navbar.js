import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { faHome, faListAlt, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link ,useLocation} from "react-router-dom";

const Navbar = () => {
  const location=useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const links = [
    { name: "Home", path: "/", icon: faHome },
    { name: "Recipes", path: "/recipes", icon: faListAlt },
    { name: "Settings", path: "/settings", icon: faEdit },
  ];
  const closeSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <>
      <div className="navbar container">
        <Link to="/"className="logo">
          Sh<span>awa</span>rmTek
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link to={link.path} key={link.name}  className={`${location.pathname===link.path?"active":""}`}>
              {link.name}
            </Link>
          ))}
        </div>
        <div
          onClick={() => setShowSidebar(!showSidebar)}
          className={`sidebar-btn ${showSidebar ? "active" : ""} `}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar links={links} close={closeSidebar}  />}
    </>
  );
};

export default Navbar;
