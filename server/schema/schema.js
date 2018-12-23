const graphql = require('graphql');
const Coffeeshop = require('../models/coffeeshop');
const Comment = require('../models/comment');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema } = graphql;


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
        return Comment.find({ coffeeshopID: parent.id });
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
          type: GraphQLString,
        },
        text: {
          type: GraphQLString
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
          type: GraphQLString
        },
        image: {
          type: GraphQLString
        }
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