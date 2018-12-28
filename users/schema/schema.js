const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema
} = graphql;

const users = [
    { id: '231', firstName: 'Hemant', age: 22 },
    { id: '233', firstName: 'Hitesh', age: 21 },
    { id: '234', firstName: 'Hunny', age: 20 },
    { id: '235', firstName: 'Himanshu', age: 24 },
]
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        Users: {
            type: 'UserType',
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) { 
                return _.find(users, { id: args.id })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})