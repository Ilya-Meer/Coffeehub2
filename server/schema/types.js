const graphql = require('graphql');
const Comment = require('../models/comment');

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;

const CoffeeshopType = new GraphQLObjectType({
  name: 'Coffeeshop',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    authorID: {
      type: GraphQLString,
    },
    authorDisplayName: {
      type: GraphQLString,
    },
    image: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    pros: {
      type: GraphQLString,
    },
    cons: {
      type: GraphQLString,
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find({ coffeeshopID: parent.id });
      },
    },
  }),
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
    authorID: {
      type: GraphQLString,
    },
    authorDisplayName: {
      type: GraphQLString,
    },
    coffeeshopID: {
      type: GraphQLString,
    },
  }),
});

const types = {
  CoffeeshopType,
  CommentType,
};

module.exports = types;
