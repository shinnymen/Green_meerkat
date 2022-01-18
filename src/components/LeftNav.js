import React from "react";
import { NavLink } from "react-router-dom";

const Leftnav = () => {
  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink to="/" exact activeClassName="active-left-nav">
            <img src="./img/icons/home.png" style={{width: "44px", height: "44px"}} alt="home" />
          </NavLink>
          <br />
          <NavLink to="/trending" exact activeClassName="active-left-nav">
            <img src="./img/icons/rocket.svg" alt="trending" />
          </NavLink>
          <br />
          <NavLink to="/profil" exact activeClassName="active-left-nav">
            <img src="./img/icons/profil.png" style={{width: "44px", height: "44px"}} alt="profil" />
          </NavLink>
          <br />
          <NavLink to="/match" exact activeClassName="active-left-nav">
            <img src="./img/icons/shakehands.png" style={{width: "44px", height: "44px"}} alt="match&play" />
          </NavLink>
          <br />
          <NavLink to="/message" exact activeClassName="active-left-nav">
            <img src="./img/icons/message3.png" style={{width: "44px", height: "44px"}}  alt="messagerie" />
          </NavLink>
          <br />
          <NavLink to="/practice" exact activeClassName="active-left-nav">
            <img src="./img/icons/greenball.png" style={{width: "44px", height: "44px"}} alt="practice" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Leftnav;
