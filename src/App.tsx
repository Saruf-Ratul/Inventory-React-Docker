// src/App.tsx
import React from 'react';
import ProductList from './components/ProductList';
import TotalValue from './components/TotalValue';
import AddProductForm from './components/AddProductForm';
import { Products } from './Products';
import { Layout, Typography } from 'antd';
import './App.css';
import { Col, Row } from 'antd';
import { Footer } from 'antd/es/layout/layout';

const { Title } = Typography;
const { Header, Content } = Layout;
const footerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};

const App: React.FC = () => {
  return (
    <div className="App">
      <Layout style={{ height: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center' }}>
          <Title style={{ color: 'white', margin: 0, textAlign: 'left' }}>Inventory App</Title>
        </Header>

        <Row>
          <Col span={7}>
            <Content style={{ padding: '1em' }}>
              <Products />
              <TotalValue />
            </Content>
          </Col>
          <Col span={17}>
            <AddProductForm />
          </Col>
        </Row>
        <Col span={24}><ProductList /></Col>
        <br />
        <Footer style={footerStyle} >©2023 Copyright: Saruf-Ratul</Footer>
      </Layout>
    </div>
  );
};

export default App;





