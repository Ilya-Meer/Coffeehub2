const graphql = require('graphql');
const types = require('./types');

const Coffeeshop = require('../models/coffeeshop');
const Comment = require('../models/comment');

const {
  CoffeeshopType,
  CommentType,
} = types;

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull,
} = graphql;


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
        return Coffeeshop.findById(args.id);
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
        return Comment.find({ coffeeshopID: parent.id });
      },
    },
    coffeeshops: {
      type: new GraphQLList(CoffeeshopType),
      resolve(parent, args) {
        return Coffeeshop.find();
      }
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addComment: {
      type: CommentType,
      args: {
        author: {
          type: new GraphQLNonNull(GraphQLString),
        },
        text: {
          type: new GraphQLNonNull(GraphQLString),
        },
        coffeeshopID: {
          type: GraphQLString
        }
      },
      resolve(parent, args) {
        // This comment is the Mongoose model, not the Graph QL Type
        let comment = new Comment({
          text: args.text,
          coffeeshopID: args.coffeeshopID,
        })
        return comment.save();
      }
    },
    addCoffeeshop: {
      type: CoffeeshopType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
        },
        image: {
          type: GraphQLString
        },
        author: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        // This coffeeshop is the Mongoose model, not the Graph QL Type
        let coffeeshop = new Coffeeshop({
          name: args.name,
          image: args.image,
        })
        return coffeeshop.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});