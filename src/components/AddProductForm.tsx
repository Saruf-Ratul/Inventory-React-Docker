// src/components/AddProductForm.tsx
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT } from '../graphql/productQueries';
import { Col, Divider, Row, message } from 'antd';
import { Button } from 'antd';
import { Input } from 'antd';
import {
  PlusOutlined
} from '@ant-design/icons';

const AddProductForm: React.FC = () => {
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState('');

  const [addProduct] = useMutation(ADD_PRODUCT);

  const handleAddProduct = () => {
    addProduct({
      variables: {
        input: {
          name,
          stock,
          price,
          description,
        },
      },
    })
      .then(() => {
        message.success('Product added successfully!');
        setName('');
        setStock(0);
        setPrice(0);
        setDescription('');
        console.log('Product added successfully!');
      })
      .catch((error) => {
        message.error('Something went wrong!');
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Add Product</h2>
      <div className="App">
        <Row gutter={[8, 8]}>

          <Col span={5} >
            <Divider orientation="left" plain>
              Item Name
            </Divider>
            <Input size="large" placeholder="Item Name" type="text" value={name} onChange={(e) => setName(e.target.value)} /></Col>

          <Col span={5} >
            <Divider orientation="left" plain>
              Item description
            </Divider>
            <Input size="large" placeholder="Item description" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /></Col>

          <Col span={5} >
            <Divider orientation="left" plain>
              Item Stock
            </Divider>
            <Input size="large" placeholder="Item Stock" type="number" value={stock} onChange={(e) => setStock(Number(e.target.value))} /></Col>

          <Col span={5} >
            <Divider orientation="left" plain>
              Item Price
            </Divider>
            <Input size="large" placeholder="Item Price" type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} /></Col>

          <Col span={4} >
            <Divider orientation="left" plain>Add Product
            </Divider>
            <Button size="large" onClick={handleAddProduct} type="primary" ><PlusOutlined />Add</Button></Col>
        </Row>
      </div>
    </div>
  );
};

export default AddProductForm;
