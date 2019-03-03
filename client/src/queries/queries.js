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

/* prettier-ignore */
const ADD_COFFEESHOP = gql`
  mutation($name: String!, $image: String, $description: String, $pros: String, $cons: String $author: String!) {
    addCoffeeshop(name: $name, image: $image, description: $description, pros: $pros, cons: $cons, author: $author) {
      name
      id
    }
  }
`;

export { GET_COFFEESHOPS, ADD_COFFEESHOP };
