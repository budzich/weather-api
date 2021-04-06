const { gql } = require("apollo-server");

const types = gql`
  type Weather {
    location: Location
    current: Current
    weekInfo: Array
  }  
   
  type Location { 
    region: String
    country: String
    timeZone: String
    localTime: Int 
   }
   
   type Current {
    temperature: Int
    feelsLike: Int
    minTemp: Int
    maxTemp: Int
    condition: Condition
    windSpeed: Int
    windDirection: String
    precipitation: Int
    pressure: Int
    humidity: Int
    cloud: Int
    isNight: Int
    hours: Array
   }
   
   type Condition {
    title: String
    icon: String
   }
   
   type Query {
    getCity(name: String): Weather
   }
`;

module.exports = {
  types
};
