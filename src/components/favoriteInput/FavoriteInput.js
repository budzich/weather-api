import './favoriteInput.css';
import React, {useState} from 'react';
import {addFavorite as addFavoriteGql} from '../../helpers/constants';
import {useMutation} from '@apollo/client';

const FavoriteInput = () => {
  const [favorite, setFavorite] = useState('');
  const [addFavorite] = useMutation(addFavoriteGql);

  const handleChange = e => {
    setFavorite(e.target.value);
  };


  const handleAdd = () => {
    if (favorite.length <= 2) {
      console.log('The request must be more than 2 characters in length');
      return null;
    }

    addFavorite({
      variables: {
        info: favorite,
      },
      update: (cache) => {
        cache.modify({
          fields: {
            getFavorites() {
            }
          }
        });
      }
    })
      .catch(e => {
        e.graphQLErrors.forEach(({message}) => {
          console.log(message);
        });
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
