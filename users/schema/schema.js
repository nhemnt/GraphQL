const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphQL;

const UserType = new GraphQLObjectType({
    name: 'Users',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
    }
})