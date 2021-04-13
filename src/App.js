import './App.css';
import Header from './components/header';
import Body from './components/body';
import React, {useState} from 'react';
import {menuSettings, userLocation} from './helpers/constants';
import LocationButton from './components/locationButton';
import {useEffect} from 'react';
import Menu from "./components/menu";
import TinySlider from 'tiny-slider-react';

const App = () => {
  const geo = navigator.geolocation;

  useEffect(() => {
    geo.getCurrentPosition(result => {
      setCurrentLocation(`${result.coords.latitude},${result.coords.longitude}`);
    }, err => {
      console.log(err);
    });
  }, [geo]);

  const [currentLocation, setCurrentLocation] = useState('Sri Jayewardenepura Kotte');

  return (
    <userLocation.Provider value={[currentLocation, setCurrentLocation]}>
      <TinySlider settings={menuSettings} className="App">
        <Menu/>
        <div className="App__info">
          <LocationButton/>
          <Header/>
          <Body/>
        </div>
      </TinySlider>
    </userLocation.Provider>
  );
};

export default App;
