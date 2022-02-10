export const GRAPHQL_API = 'http://localhost:4000/';

export const GET_PRODUCTS_QUERY = `
  query categories {
    categories {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            id
            displayValue
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;
