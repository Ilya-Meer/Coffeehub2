const schema = `
  type AuthorType {
    _id: ID!
    fbid: String
    displayName: String
  }

  type CoffeeshopType {
    _id: ID!
    name: String
    image: String
    author: AuthorType
    description: String
    pros: String
    cons: String
    comments: [CommentType]
  }

  type CommentType {
    _id: ID!
    text: String
    coffeeshopID: String
    author: AuthorType
  }

  input AuthorInput {
    fbid: String
    displayName: String
  }

  input CoffeeshopInput {
    name: String
    image: String
    author: AuthorInput
    description: String
    pros: String
    cons: String
  }

  input CommentInput {
    text: String
    coffeeshopID: String
    author: AuthorInput
  }

  type RootQuery {
    comment(_id: String): CommentType
    comments: [CommentType!]
    coffeeshop(_id: String): CoffeeshopType
    coffeeshops: [CoffeeshopType!] 
  }

  type RootMutation {
    createCoffeeshop(coffeeshopInput: CoffeeshopInput): CoffeeshopType
    createComment(commentInput: CommentInput): CommentType
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`;

module.exports = schema;
