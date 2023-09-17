// src/components/ProductList.tsx
import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/productQueries';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const ProductList: React.FC = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const products = data.products;

  // Define columns for the table
  const columns: ColumnsType<any> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      render: (price: number) => <span>${price}</span>,
    },
  ];

  return (
    <div>
      <h2>Product List</h2>
      <Table dataSource={products} columns={columns} />
    </div>
  );
};

export default ProductList;
