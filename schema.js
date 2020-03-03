const graphql = require('graphql')

const { signUp, changeUserEmail, changeUserPassword, changeUserName, changeUserProfile } = require('./src/collections/user/graphql/mutation')
// User
const { login, getProfile, allUser } = require('./src/collections/user/graphql/query')

// Emoney
const { addDummy } = require('./src/collections/emoney/graphql/mutation')
const { allTransaction } = require('./src/collections/emoney/graphql/query')

// Transaction
const { addTransaction } = require('./src/collections/transaction/graphql/mutation')

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
    addDummy,
    addTransaction
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})
