import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p>Free Shipping Over $100 & Free Return</p>
            </div>
            <div className="col-6">
              <p className="text-end ">
                Hotline: <a href="tel:+880 1874997427">+880 1874997427</a>
              </p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
