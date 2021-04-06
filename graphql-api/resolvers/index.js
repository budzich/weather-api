const axios = require('axios');

const WEATHER_API = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.KEY}`;

const getHoursWeather = day => {
  return day.map(el => ({
    temperature: el.temp_c,
    hour: new Date(el.time_epoch).getTime(),
    icon: el.condition.icon,
    humidity: el.humidity
  }));
};

const getWeekWeather = days => days.map(el => ({
  minTemperature: el.condition.mintemp_c,
  maxTemperature: el.condition.maxtemp_c,
  day: new Date(el.time_epoch).getDay(),
  icon: el.day.condition.icon
}));

const resolvers = {
  Query: {
    getCity: async (obj, args, context, info) => {
      try {
        const {data} = await axios.get(`${WEATHER_API}&q=${args.city}&days=7`);

        if (data.error) {
          return null;
        }

        return {
          location: {
            name: data.location.name,
            region: data.location.region,
            country: data.location.country,
            timeZone: data.location.tz_id,
            localTime: data.location.localtime_epoch
          },
          current: {
            temperature: data.current.temp_c,
            feelsLike: data.current.feelslike_c,
            minTemp: data.forecast.forecastday[0].mintemp_c,
            maxTemp: data.forecast.forecastday[0].maxtemp_c,
            averageTemp: data.forecast.forecastday[0].avgtemp_c,
            condition: {
              title: data.current.condition.text,
              icon: data.current.condition.icon
            },
            windSpeed: data.current.wind_kph,
            windDirection: data.current.wind_dir,
            precipitation: data.current.precip_mm,
            pressure: data.current.pressure_mb,
            humidity: data.current.humidity,
            cloud: data.current.cloud,
            isNight: !data.current.is_day,
            hours: getHoursWeather(),
          },
          weekInfo: getWeekWeather()
        };
      } catch (e) {
        return null;
      }
    }
  }
};

module.exports = {
  resolvers,
};

