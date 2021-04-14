import './menu.css';
import React from 'react';
import {MENU_CLOSED, MENU_HIDDEN, MENU_OPENED} from "../../helpers/constants";
import {useState} from "react";

const Menu = () => {
  const [menuState, setMenuState] = useState(MENU_CLOSED)

  const handleOpen = () => {
    setMenuState(MENU_OPENED)
  }

  const handleClose = () => {
    setMenuState(MENU_HIDDEN)
  }

  if (menuState === MENU_CLOSED) {
    return (
      <button className="menu__open" onClick={handleOpen}>
        <img className="menu__icon" src="./menu.png" alt="err"/>
      </button>
    )
  }

  if (menuState === MENU_HIDDEN) {
    return (
      <div className={menuState}>
        <button className="menu__open" onClick={handleOpen}>
          <img className="menu__icon" src="./menu.png" alt="err"/>
        </button>
      </div>
    )
  }

  return (
    <div className={menuState}>
      <div className="menu__close" onClick={handleClose}/>
      <p className="menu__favorite">Favorites</p>
    </div>
  );
};

export default Menu;
