const graphql = require('graphql')

// User
const { signUp, changeUserEmail, changeUserPassword, changeUserName, changeUserProfile, logout } = require('./src/collections/user/graphql/mutation')
const { login, getProfile, allUser  } = require('./src/collections/user/graphql/query')

// Emoney
const { allTransaction } = require('./src/collections/emoney/graphql/query')

// Merchant
const { signUpMerchant } = require('./src/collections/merchant/graphql/mutation')

// Services
const { topupVa, staticPayment } = require('./src/services/graphql/mutation')

const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    login,
    getProfile,
    allUser,
    allTransaction
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signUp,
    changeUserEmail,
    changeUserName,
    changeUserPassword,
    changeUserProfile,
    signUpMerchant,
    topupVa,
    staticPayment,
    logout
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
