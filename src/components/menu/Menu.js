import './menu.css';
import React from 'react';
import {
  getFavorites,
  MENU_CLOSED,
  MENU_HIDDEN,
  MENU_OPENED
} from '../../helpers/constants';
import {useState} from 'react';
import {useQuery} from '@apollo/client';
import Favorite from '../favorite';
import FavoriteInput from '../favoriteInput';

const Menu = () => {
  const [menuState, setMenuState] = useState(MENU_CLOSED);
  const {data} = useQuery(getFavorites);

  const handleOpen = () => {
    setMenuState(MENU_OPENED);
  };

  const handleClose = () => {
    setMenuState(MENU_HIDDEN);
  };

  if (menuState === MENU_CLOSED) {
    return (
      <button className="menu__open" onClick={handleOpen}>
        <img className="menu__icon" src="./menu.png" alt="err"/>
      </button>
    );
  }

  if (menuState === MENU_HIDDEN) {
    return (
      <div className={menuState}>
        <button className="menu__open" onClick={handleOpen}>
          <img className="menu__icon" src="./menu.png" alt="err"/>
        </button>
      </div>
    );
  }

  return (
    <div className={menuState}>
      <div className="menu__close" onClick={handleClose}/>
      <p className="menu__favorite-title">Favorites</p>
      <FavoriteInput/>
      <ul className="menu__favorites">
        {data.getFavorites.map(el => <Favorite setMenuState={setMenuState} key={el.id} el={el}/>)}
      </ul>
    </div>
  );
};

export default Menu;
