import { gql } from 'apollo-boost';

const GET_COFFEESHOPS = gql`
  {
    coffeeshops {
      id
      name
      image
      description
      pros
      cons
      author
      comments {
        text
        author
      }
    }
  }
`;

const GET_SINGLE_COFFEESHOP = gql`
  query($id: ID) {
    coffeeshop(id: $id) {
      id
      name
      image
      description
      pros
      cons
      author
      comments {
        text
        author
      }
    }
  }
`;

/* prettier-ignore */
const ADD_COFFEESHOP = gql`
  mutation($name: String!, $image: String, $description: String, $pros: String, $cons: String $author: String!) {
    addCoffeeshop(name: $name, image: $image, description: $description, pros: $pros, cons: $cons, author: $author) {
      name
      id
    }
  }
`;

export { GET_COFFEESHOPS, GET_SINGLE_COFFEESHOP, ADD_COFFEESHOP };
