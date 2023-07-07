import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../component/Rating'
import axios from 'axios'

const ProductScreen = () => {
  const [product, setProducts]=useState({});
  const params=useParams();
  const { id }= params;
  useEffect(()=>{
    const fetchProductsDetail= async() =>{
      const {data}=await axios.get(`/api/product/${params.id}`)
      setProducts(data);
    }
    fetchProductsDetail();
  },[])
  return (
    <>
    <Link className='btn btn-light my-3' to='/'>
      Go Back
    </Link>
    
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid/>
      </Col>

      <Col md={4}>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            <Rating value={product.rating} text={`${product.numReviews} Reviews`} color={'red'}/>
          </ListGroup.Item>

          <ListGroup.Item>
            <h3>Price: ${product.price}</h3>
          </ListGroup.Item>

          <ListGroup.Item>
            Description: {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>

      <Col md={2}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row> 
                <Col>Price</Col>
                <Col>
                <strong> ${product.price}</strong></Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Row> 
                <Col>Status</Col>
                <Col>
                <strong> {product.countInStock > 0? 'InStock':'Out of stock'}</strong></Col>
              </Row>
            </ListGroup.Item>

            <ListGroup.Item>
              <Button className='btn-block' type='button' disabled={product.countInStock===0}>
                Add to cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        
      </Col>
      
    </Row>

    </>
  );

}

export default ProductScreen