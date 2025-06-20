import React from "react";
import logo from "../../img/logo-bitA.png";
import menuLogo from "../../img/menu.svg";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-container container">
        <div className="header-container__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header-container__menu">
          <img src={menuLogo} alt="Menu Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
