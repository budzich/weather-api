const { gql } = require("apollo-server");

const typeDefs = gql`
  type Weather {
    location: Location
    current: Current
    weekInfo: [Day]
    yesterday: Yesterday
  }  
  
  type Yesterday {
      minTemp: String
      maxTemp: String
  }
  
  type Day {
    minTemperature: String
    maxTemperature: String
    date: Int
    icon: String
    humidity: Int
  } 
   
  type Location { 
    name: String
    region: String
    country: String
    timeZone: String
    localTime: Int 
   }
   
   type Current {
    temperature: String
    feelsLike: String
    minTemp: String
    maxTemp: String
    condition: Condition
    windSpeed: Int
    windDirection: String
    precipitation: Int
    pressure: Int
    humidity: Int
    cloud: Int
    isNight: Int
    hours: [Hour]
   }
   
   type Hour {
    temperature: String
    hour: Int
    icon: String
    humidity: Int
  }
   
   type Condition {
    title: String
    icon: String
   }
   
   type Query {
    getCity(name: String!): Weather
   }
`;

module.exports = {
  typeDefs
};
