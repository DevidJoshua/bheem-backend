const graphql = require('graphql')

const { findUser } = require('../../../utils/mongoServices')

const {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLInt
} = graphql

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    full_name: { type: GraphQLString },
    username: { type: GraphQLString },
    device_id: { type: GraphQLString },
    email: { type: GraphQLString },
    password: { type: GraphQLString },
    first_name: { type: GraphQLString },
    last_name: { type: GraphQLString },
    nickname: { type: GraphQLString },
    address: { type: GraphQLString }
  })
})

const AuthType = new GraphQLObjectType({
  name: 'Auth',
  fields: () => ({
    user_id: { type: GraphQLID },
    access_token: { type: GraphQLString },
    status: { type: GraphQLInt },
    error: { type: GraphQLString },
    success: { type: GraphQLString },
    user: {
      type: UserType,
      resolve (parent, args) {
        return findUser(parent.user_id)
      }
    }
  })
})

module.exports.UserType = UserType
module.exports.AuthType = AuthType
