const graphql = require('graphql')

const { TransactionType } = require('../../collections/transaction/graphql/type')

const {
  GraphQLString,
  GraphQLInt,
  GraphQLObjectType
} = graphql

const ResponseType = new GraphQLObjectType({
  name: 'Response',
  fields: () => ({
    error: { type: GraphQLString },
    status: { type: GraphQLInt },
    success: { type: GraphQLString }
  })
})

const StaticPaymentScanType = new GraphQLObjectType({
  name: 'ScanResponse',
  fields: () => ({
    transaction_id: { type: GraphQLString },
    merchant_id: { type: GraphQLString },
    billing_id: { type: GraphQLString },
    error: { type: GraphQLString },
    status: { type: GraphQLInt },
    success: { type: GraphQLString }
  })
})

const TransactionDetailType = new GraphQLObjectType({
  name: 'TransactionDetailResponse',
  fields: () => ({
    status: { type: GraphQLInt },
    success: { type: GraphQLString },
    error: { type: GraphQLString },
    transaction: { type: TransactionType }
  })
})

module.exports.ResponseType = ResponseType
module.exports.StaticPaymentScanType = StaticPaymentScanType
module.exports.TransactionDetailType = TransactionDetailType
