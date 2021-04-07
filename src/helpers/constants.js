import {gql} from '@apollo/client/core';
import {createContext} from 'react';

export const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

export const userLocation = createContext('Novopolotsk');

export const GetWeather = gql`
    query GetWeather($name: String!) {
        getCity(name: $name) {
            location {
                name
                localTime
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
