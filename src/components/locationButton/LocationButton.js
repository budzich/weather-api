import './locationButton.css';
import React from 'react';
import {useRef} from 'react';
import {useState} from 'react';
import {userLocation} from '../../helpers/constants';
import {useContext} from 'react';

const LocationButton = () => {
  const search = useRef();
  const [, setLocation] = useContext(userLocation);
  const [isSearching, setIsSearching] = useState(false);

  const handleClick = () => {
    search.current.focus();

    if (search.current.value && search.current.value.length <= 2) {
      return null;
    }

    if (search.current.value.length > 2) {
      setLocation(search.current.value);
    }

    setIsSearching(!isSearching);
  };

  return (
    <div className={`location ${isSearching && 'location-border'}`}>
      <img onClick={handleClick} className="location__icon" src="./search.ico" alt="err"/>
      <input ref={search} className={`location__search ${!isSearching && 'visually-hidden'}`} type="text"/>
    </div>
  );
};

export default LocationButton;
