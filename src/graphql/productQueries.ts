// src/graphql/productQueries.ts
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      stock
      price
      description
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($input: products_insert_input!) {
    insert_products_one(object: $input) {
      id
    }
  }
`;
