const axios = require('axios');

const WEATHER_API_CURRENT = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.KEY}`;
const WEATHER_API_YESTERDAY = `http://api.weatherapi.com/v1/history.json?key=${process.env.KEY}`;

const getYesterday = time => {
  const date = new Date(new Date(time).setDate(new Date().getDate() - 1));

  return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
};

const getHoursWeather = day => {
  return day.map(el => ({
    temperature: el.temp_c,
    hour: new Date(el.time_epoch * 1000).getHours(),
    icon: el.condition.icon,
    humidity: el.humidity
  }));
};

const getWeekWeather = days => days.map(el => ({
  minTemperature: el.day.mintemp_c,
  maxTemperature: el.day.maxtemp_c,
  date: el.date_epoch,
  icon: el.day.condition.icon,
  humidity: el.day.avghumidity
}));

const resolvers = {
  Query: {
    getCity: async (obj, args, context, info) => {
      try {
        const {data} = await axios.get(`${WEATHER_API_CURRENT}&q=${args.name}&days=7`);
        const response = await axios.get(`${WEATHER_API_YESTERDAY}&q=${args.name}&dt=${getYesterday()}`);
        const yesterday = await response.data;

        if (data.error || yesterday.error) {
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
            minTemp: data.forecast.forecastday[0].day.mintemp_c,
            maxTemp: data.forecast.forecastday[0].day.maxtemp_c,
            averageTemp: data.forecast.forecastday[0].day.avgtemp_c,
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
            hours: getHoursWeather(data.forecast.forecastday[0].hour),
          },
          weekInfo: getWeekWeather(data.forecast.forecastday),
          yesterday: {
            minTemp: yesterday.forecast.forecastday[0].day.mintemp_c,
            maxTemp: yesterday.forecast.forecastday[0].day.maxtemp_c
          }
        };
      } catch (e) {
        console.log(e);
        return null;
      }
    }
  }
};

module.exports = {
  resolvers,
};

