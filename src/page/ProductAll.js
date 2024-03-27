import React from 'react'
import { useEffect, useState } from "react";
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const getProducts = async () => {
        let url = 'http://localhost:5000/products';
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, []);

  return (
        <Container fluid="sm">
            <Row>
                {productList.map(menu => (
                    <Col lg={3}>
                        <ProductCard item={menu}/>
                    </Col>    
                ))}
            </Row>
        </Container>
  )
}

export default ProductAll