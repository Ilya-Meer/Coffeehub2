import { gql } from "apollo-boost";

const GET_COFFEESHOPS = gql`
  {
    coffeeshops {
      _id
      name
      image
      description
      pros
      cons
      author {
        fbid
        displayName
      }
      comments {
        text
        author {
          fbid
          displayName
        }
      }
    }
  }
`;

const GET_SINGLE_COFFEESHOP = gql`
  query($_id: String) {
    coffeeshop(_id: $_id) {
      _id
      name
      image
      description
      pros
      cons
      author {
        fbid
        displayName
      }
      comments {
        text
        author {
          fbid
          displayName
        }
      }
    }
  }
`;

/* prettier-ignore */
const ADD_COFFEESHOP = gql`
  mutation addCoffeeshop($name: String!, $image: String, $description: String, $pros: String, $cons: String, $authorID: String!, $authorDisplayName: String!) {
    addCoffeeshop(name: $name, image: $image, description: $description, pros: $pros, cons: $cons, authorID: $authorID, authorDisplayName: $authorDisplayName) {
      name
      id
    }
  }
`;

const ADD_COMMENT = gql`
  mutation addComment(
    $authorID: String!
    $authorDisplayName: String!
    $text: String!
    $id: String!
  ) {
    addComment(
      authorID: $authorID
      authorDisplayName: $authorDisplayName
      text: $text
      coffeeshopID: $id
    ) {
      text
    }
  }
`;

export { GET_COFFEESHOPS, GET_SINGLE_COFFEESHOP, ADD_COFFEESHOP, ADD_COMMENT };
