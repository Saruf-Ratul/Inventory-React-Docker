// src/components/TotalValue.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/productQueries';

const TotalValue: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products;
  const totalValue = products.reduce((acc: number, product: { stock: number; price: number; }) => {
    return acc + (product.stock * product.price);
  }, 0);

  return (
    <div>
      <h1>Total Products Value </h1>
      <p>Total value: ${totalValue.toFixed(2)}</p>
    </div>
  );
};

export default TotalValue;
