import {gql} from '@apollo/client/core';
import {createContext} from 'react';

export const days = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday'
];

export const settings = {
  items: 5,
  loop: false,
  nav: false,
  controls: false,
  speed: 200,
  swipeAngel: false,
  Edgepadding: 17
};


export const userLocation = createContext('Novopolotsk');

export const GetWeather = gql`
    query GetWeather($name: String!) {
        getCity(name: $name) {
            location {
                name
                localTime
                localTimeString
            }
            current {
                temperature
                feelsLike
                minTemp
                maxTemp
                condition {
                    title
                    icon
                }
                hours {
                    temperature
                    icon
                    hour
                }
                moreHours {
                    temperature
                    icon
                    hour
                }
            }
            weekInfo {
                humidity
                icon
                maxTemperature
                minTemperature
                date
            }
            yesterday {
                minTemp
                maxTemp
            }
        }
    }
`;

export const GetDayWeather = gql`
    query GetWeather($name: String!) {
        getCity(name: $name) {
            location {
                name
                localTime
                localTimeString
            }
            current {
                temperature
                feelsLike
                minTemp
                maxTemp
                condition {
                    title
                    icon
                }
            }

        }
    }
`;

export const GetHoursWeather = gql`
    query GetWeather($name: String!) {
        getCity(name: $name) {
            location {
                localTimeString
            }
            current {
                hours {
                    temperature
                    icon
                    hour
                }
                moreHours {
                    temperature
                    icon
                    hour
                }
            }
        }
    }
`;

export const GetWeekWeather = gql`
    query GetWeather($name: String!) {
        getCity(name: $name) {
            weekInfo {
                humidity
                icon
                maxTemperature
                minTemperature
                date
            }
            yesterday {
                minTemp
                maxTemp
            }
        }
    }
`;

export const currentHours = new Date().getHours();
