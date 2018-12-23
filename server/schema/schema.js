const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;


const shops = [
  {
    name: 'Starbucks',
    id: '1',
    image: 'http://nuvomagazine.com/wp-content/uploads/2017/05/Vancouver-Reserve-Bar.jpg'
  },
  {
    name: 'Blenz',
    id: '2',
    image: 'http://blenz.com/wp-content/uploads/2014/07/location_spotlight_gardencity2.jpg'
  },
];


const CoffeeshopType = new GraphQLObjectType({
  name: 'Coffeeshop',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    coffeeshop: {
      type: CoffeeshopType,
      args: {
        id: {
          type: GraphQLString,
        },
      },
      resolve(parent, args) {
        return shops.find(shop => shop.id === args.id);
      },
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});