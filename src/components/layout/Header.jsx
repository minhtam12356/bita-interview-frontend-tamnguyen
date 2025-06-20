import React from "react";
import logo from "../../img/logo-bitA.png";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Hello" />
      </div>
    </header>
  );
};

export default Header;
