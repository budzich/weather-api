import './favorite.css';
import {useMutation} from '@apollo/client';
import {MENU_HIDDEN, removeFavorite, userLocation} from '../../helpers/constants';
import {useContext} from 'react';

const Favorite = ({el, setMenuState}) => {
  const [deleteFavorite] = useMutation(removeFavorite);
  const [, setLocation] = useContext(userLocation);

  const handleDelete = () => {
    deleteFavorite({
      variables: {
        info: el.info,
      },
      update: (cache, {data}) => {
        cache.evict({id: cache.identify(data.removeFavorite)});
      }
    });
  };

  const handleClick = () => {
    setLocation(el.info);
    setMenuState(MENU_HIDDEN);
  };

  return (
    <div className="favorite">
      <p onClick={handleClick} key={el.id} className="favorite-title">{el.title}</p>
      <div onClick={handleDelete} className="favorite__delete">x</div>
    </div>
  );
};

export default Favorite;
