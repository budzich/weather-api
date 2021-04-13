const {ApolloError} = require("apollo-server");
module.exports = {
  Query: {
    async getFavorites(obj, arg, {models}) {
      const result = await models.Favorite.findAll({where: {}})

      return result.map(el => el.dataValues)
    }
  },

  Mutation: {
    async addFavorite(obj, {title, info}, {models}) {
      const isExists = await models.Favorite.findOne({where: {title}})

      if (isExists) {
        throw new ApolloError('Place already in use')
      }

      await models.Favorite.create({title, info})

      return 'Success!'
    },

    async removeFavorite(obj, {title}, {models}) {
      const isExists = await models.Favorite.findOne({where: {title}})
      if (!isExists) {
        throw new ApolloError('Place doesnt in use')


      }

      await models.Favorite.destroy({where: {title}})

      return 'Success!'
    }
  }
}
