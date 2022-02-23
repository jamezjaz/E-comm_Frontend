import { useParams } from 'react-router-dom';

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

// a function that returns currency symbol and amount
export const price = (prices, label) => {
  const price = prices.find(price => price.currency.label === label)
  return `${price.currency.symbol}${price.amount}`  
};

// HOC
export const withRouter = ProductDescription => props => {
  const params = useParams();

  return (
    <ProductDescription
      {...props}
      params={params}
    />
  )
};

// Currency symbols
export const totalSymbol = {
  USD: '$',
  GBP: '£',
  AUD: 'A$',
  JPY: '¥',
  RUB: '₽'
};
