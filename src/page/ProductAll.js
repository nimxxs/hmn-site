import React from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../component/ProductCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ProductAction} from '../redux/actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    // const [productList, setProductList] = useState([]);
    // reducer로 productList를 만들었으니? useState가 이제 필요없다.
    // 그리고 productList를 보내야하니까 useSelector가 필요?
    const productList = useSelector(state => state.product.productList);

    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();

    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        console.log("search", searchQuery)
        // let url = `https://my-json-server.typicode.com/nimxxs/hnm-site/products?q=${searchQuery}`;
        // let response = await fetch(url);
        // let data = await response.json();
        // setProductList(data);

        // 이제 여기서 미들웨어에 있는 getProducts를 불러야함.
        dispatch(ProductAction.getProducts(searchQuery))
    };
    useEffect(() => {
        getProducts();
    }, [query]);

  return (
        <Container id='mobile-area'>
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