import React from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
        let searchQuery = query.get('q') || "";
        console.log("search", searchQuery)
        let url = `https://my-json-server.typicode.com/nimxxs/hnm-site/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        setProductList(data);
    };
    useEffect(() => {
        getProducts();
    }, [query]);

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