import { React, useEffect, useState } from 'react'
import { Container, Dropdown, Row, Col, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let{id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/nimxxs/hnm-site/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }

  useEffect(() => {
    getProductDetail();
  },[])

  return (
    <Container id='productDetail-area'>
      <Row>
        <Col >
          <img id='productDetail-img' src={product?.img} />
        </Col>
        <Col>
          <div>{product?.new == true ? "신상품" : ""}</div>
          <div className='productDetail'>{product?.title}</div>
          <div className='productDetail'>₩{product?.price}</div>
          <div className='productDetail'>{product?.choice == true ? "Conscious Choice" : ""}</div>
          <Dropdown className='productDetail'>
            <Dropdown.Toggle variant="dark" style={{color: 'black', backgroundColor: 'white'}} id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">{product?.size[0]}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button className='plusButton' variant="dark">추가</Button>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail