import { gql } from 'apollo-boost';

const getCoffeeshopQuery = gql`
  {
    coffeeshops {
      id
      name
      image
      author
      comments {
        text
        author
      }
    }
  }
`

const addCoffeeshopMutation = gql`
  mutation($name: String!, $image: String, $author: String!) {
    addCoffeeshop(name: $name, image: $image, author: $author) {
      name
      id
    }
  }
`

export { getCoffeeshopQuery, addCoffeeshopMutation };