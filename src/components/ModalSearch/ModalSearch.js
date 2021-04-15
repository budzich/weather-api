import './modalSearch.css';
import React from 'react';
import {SEARCH_HIDDEN, SEARCH_OPENED, userLocation} from "../../helpers/constants";
import {useContext, useRef} from "react";

const ModalSearch = ({searchState, setSearchState}) => {
  const search = useRef();
  const [, setLocation] = useContext(userLocation);

  if (searchState === SEARCH_OPENED) {
    search.current.focus();
  }

  const handleSearch = () => {
    search.current.focus();

    if (search.current.value && search.current.value.length <= 2) {
      return null;
    }

    if (search.current.value.length > 2) {
      setLocation(search.current.value);
    }

    setSearchState(SEARCH_HIDDEN);
  }

  const closeModal = () => {
    setSearchState(SEARCH_HIDDEN);
  }

  return (
    <div className={searchState}>
      <div className="search__container">
        <div className="search__arrow" onClick={closeModal}/>
        <input ref={search} className="search__input"
               placeholder="Enter here..." type="text"/>
      </div>
      <img onClick={handleSearch} className="search__icon" src="./search.ico" alt="err"/>
    </div>
  );
};

export default ModalSearch;
