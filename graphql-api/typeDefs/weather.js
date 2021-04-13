const {gql} = require('apollo-server');

module.exports = gql`
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
        nightIcon: String
        humidity: Int
    }

    type Location {
        name: String
        region: String
        country: String
        timeZone: String
        localTime: Int
        localTimeDifference: String
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
        moreHours: [Hour]
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

    extend type Query {
        getCity(name: String!): Weather
    }
`;
