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
    author: {
      type: AuthorType,
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
    author: {
      type: AuthorType,
    },
    coffeeshopID: {
      type: GraphQLString,
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    displayName: {
      type: GraphQLString,
    },
  }),
});

const types = {
  AuthorType,
  CoffeeshopType,
  CommentType,
};

module.exports = types;
