import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="header__background"/>
      <p className="header__title">Weather</p>
      <img className="header__image" src="./clouds.jpg" alt="err"/>
    </div>
  );
};

export default Header;
