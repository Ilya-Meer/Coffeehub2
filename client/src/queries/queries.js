import { gql } from 'apollo-boost';

const getCoffeeshopQuery = gql`
  {
    coffeeshops {
      id
      name
      image
      comments {
        text
      }
    }
  }
`
export { getCoffeeshopQuery };