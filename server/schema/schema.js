const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema } = graphql;


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

const comments = [
  {
    id: '1',
    text: 'This place sucks',
    author: '55',
    coffeeshopID: '1',
  },
  {
    id: '2',
    text: 'Blabbityblah',
    author: '51',
    coffeeshopID: '1',
  },
];


const CoffeeshopType = new GraphQLObjectType({
  name: 'Coffeeshop',
  fields: () => ({
    id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return comments.filter(c => c.coffeeshopID === parent.id)
      }
    }
  })
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    text: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    coffeeshopID: {
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
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return shops.find(shop => shop.id === args.id);
      },
    },
    comment: {
      type: CommentType,
      args: {
        id: {
          type: GraphQLID,
        },
      },
      resolve(parent, args) {
        return comments.find(comment => comment.id === args.id);
      },
    },
    coffeeshops: {
      type: new GraphQLList(CoffeeshopType),
      resolve(parent, args) {
        return shops;
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return comments;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});