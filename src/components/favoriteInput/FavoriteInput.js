import './favoriteInput.css';
import React, {useState} from 'react';
import {addFavorite as addFavoriteGql, getFavorites} from '../../helpers/constants';
import {useMutation} from '@apollo/client';

const FavoriteInput = () => {
  const [favorite, setFavorite] = useState('');
  const [addFavorite] = useMutation(addFavoriteGql);

  const handleChange = e => {
    setFavorite(e.target.value);
  };


  const handleAdd = () => {
    if (favorite.length <= 2) {
      return null;
    }

    addFavorite({
      variables: {
        info: favorite,
      },
      errorPolicy: 'all',
      refetchQueries: [{query: getFavorites}]
    });

    setFavorite('');
  };

  return (
    <div className="menu__favorite-new">
      <input placeholder="Enter here..." className="menu__favorite-input" value={favorite} onChange={handleChange}/>
      <div className="menu__favorite-add" onClick={handleAdd}>+</div>
    </div>
  );
};

export default FavoriteInput;
