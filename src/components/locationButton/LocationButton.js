import './locationButton.css';
import React from 'react';
import {useState} from 'react';
import ModalSearch from "../modalSearch";
import {SEARCH_CLOSED, SEARCH_OPENED} from "../../helpers/constants";

const LocationButton = () => {
  const [searchState, setSearchState] = useState(SEARCH_CLOSED);

  const handleClick = () => {
    setSearchState(SEARCH_OPENED);
  };

  return (
    <div className={`location`}>
      <img onClick={handleClick} className="location__icon" src="./search.ico" alt="err"/>
      <ModalSearch searchState={searchState} setSearchState={setSearchState}/>
    </div>
  );
};

export default LocationButton;
