const graphql = require('graphql');
const types = require('./types');

const Coffeeshop = require('../models/coffeeshop');
const Comment = require('../models/comment');
const Author = require('../models/author');

const { CoffeeshopType, CommentType } = types;

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
        return Coffeeshop.findById(args.id).populate('author');
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
        return Comment.find({ coffeeshopID: parent.id }).populate('author');
      },
    },
    coffeeshops: {
      type: new GraphQLList(CoffeeshopType),
      resolve(parent, args) {
        return Coffeeshop.find()
          .populate('author')
          .then(res => {
            return res.forEach(shop => {
              shop.comments.forEach(comment => {
                console.log(Comment.find({ _id: comment.id }));
                return Comment.find({ id: comment.id });
              });
              // return shop.comments.forEach(comment => {
              //   return Comment.findById(comment.id).populate('author');
              // });
            });
          })
          .then(res => res);
      },
    },
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parent, args) {
        return Comment.find().populate('author');
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addComment: {
      type: CommentType,
      args: {
        authorID: {
          type: new GraphQLNonNull(GraphQLString),
        },
        authorDisplayName: {
          type: new GraphQLNonNull(GraphQLString),
        },
        text: {
          type: new GraphQLNonNull(GraphQLString),
        },
        coffeeshopID: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const createComment = author => {
          return new Comment({
            text: args.text,
            coffeeshopID: args.coffeeshopID,
            author,
          })
            .save()
            .then(comment => {
              return Coffeeshop.findByIdAndUpdate(args.coffeeshopID, {
                $push: { comments: comment },
              });
            })
            .catch(e => {
              throw e;
            });
        };

        Author.findOne({ id: args.authorID })
          .then(result => {
            if (result) {
              return createComment(result);
            }

            const author = new Author({
              id: args.authorID,
              displayName: args.authorDisplayName,
            });

            return author.save().then(() => {
              return createComment(author);
            });
          })
          .catch(e => {
            throw e;
          });
      },
    },
    addCoffeeshop: {
      type: CoffeeshopType,
      args: {
        name: {
          type: new GraphQLNonNull(GraphQLString),
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
        authorID: {
          type: new GraphQLNonNull(GraphQLString),
        },
        authorDisplayName: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(parent, args) {
        const createCoffeeshop = author => {
          return new Coffeeshop({
            name: args.name,
            image: args.image,
            description: args.description,
            pros: args.pros,
            cons: args.cons,
            author,
          }).save();
        };

        Author.findOne({ id: args.authorID })
          .then(result => {
            if (result) {
              return createCoffeeshop(result);
            }

            const author = new Author({
              id: args.authorID,
              displayName: args.authorDisplayName,
            });

            return author.save().then(() => {
              return createCoffeeshop(author);
            });
          })
          .catch(e => {
            throw e;
          });
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
