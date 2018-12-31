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
export { getCoffeeshopQuery };