import './menu.css';
import React from 'react';
import {
  addFavorite as addFavoriteGql,
  getFavorites,
  MENU_CLOSED,
  MENU_HIDDEN,
  MENU_OPENED
} from '../../helpers/constants';
import {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import Favorite from '../favorite';

const Menu = () => {
  const [menuState, setMenuState] = useState(MENU_CLOSED);
  const [favorite, setFavorite] = useState('');
  const {data} = useQuery(getFavorites);

  const [addFavorite] = useMutation(addFavoriteGql);

  const handleChange = e => {
    setFavorite(e.target.value);
  };

  const handleOpen = () => {
    setMenuState(MENU_OPENED);
  };

  const handleClose = () => {
    setMenuState(MENU_HIDDEN);
  };

  const handleAdd = () => {
    if (favorite.length <= 2) {
      return null;
    }

    addFavorite({
      variables: {
        info: favorite,
      },
      refetchQueries: [{query: getFavorites}]
    });

    setFavorite('');
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
      <div className="menu__favorite-new">
        <input placeholder="Enter here..." className="menu__favorite-input" value={favorite} onChange={handleChange}/>
        <div className="menu__favorite-add" onClick={handleAdd}>+</div>
      </div>
      <ul className="menu__favorites">
        {data.getFavorites.map(el => <Favorite setMenuState={setMenuState} key={el.id} el={el}/>)}
      </ul>
    </div>
  );
};

export default Menu;
