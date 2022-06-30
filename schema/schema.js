const graphql = require('graphql');
const _ = require('lodash');
const cars = require('../cars.json').data
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID
} = graphql;

const CarType = new GraphQLObjectType({
    name: "Car",
    fields: () => ({
        id: {type: GraphQLID},
        brand: {type: GraphQLString},
        model: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        car: {
            type: CarType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(cars, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});
