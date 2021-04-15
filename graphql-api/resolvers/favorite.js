const axios = require("axios");
const {ApolloError} = require("apollo-server");

const WEATHER_API = `http://api.weatherapi.com/v1/current.json?key=${process.env.KEY}`;

module.exports = {
  Query: {
    async getFavorites(obj, arg, {models}) {
      const result = await models.Favorite.findAll({where: {}})

      return result.map(el => el.dataValues)
    }
  },

  Mutation: {
    async addFavorite(obj, {info}, {models}) {
      const isExists = await models.Favorite.findOne({where: {info}})

      if (isExists) {
        throw new ApolloError('Place already in use')
      }

      const {data} = await axios.get(`${WEATHER_API}&q=${info}&days=7`);

      if (data.error)
        return null;

      await models.Favorite.create({title: data.location.name, info})

      const result = await models.Favorite.findOne({where: {info}});

      return result.dataValues;
    },

    async removeFavorite(obj, {info}, {models}) {
      const isExists = await models.Favorite.findOne({where: {info}})
      if (!isExists) {
        throw new ApolloError('Place doesnt in use')


      }

      await models.Favorite.destroy({where: {info}})

      return 'Success!'
    }
  }
}
