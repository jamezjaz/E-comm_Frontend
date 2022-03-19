import { useParams, useNavigate } from 'react-router-dom';

export const GRAPHQL_API = 'http://localhost:4000/';

export const GET_PRODUCTS_QUERY = `
  query categories {
    categories {
      name
    }

		all: category(input: {title: "all"}) {
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

  	clothes: category(input: {title: "clothes"}) {
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

    tech: category(input: {title: "tech"}) {
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

    currencies {
      label
      symbol
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

export const withNavigate = Product => props => {
  const navigate = useNavigate();

  return (
    <Product
      {...props}
      navigate={navigate}
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
