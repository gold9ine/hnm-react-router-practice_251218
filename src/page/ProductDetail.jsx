import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  let { id } = useParams();

  const getProductDetail = async () => {
    setLoading(true);
    // let url = `http://localhost:5000/products/${id}`;
    let url = `https://my-json-server.typicode.com/gold9ine/hnm-react-router-practice_251218/products/${id}`;
    // let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log("detail: ", data);
    setLoading(false);
    setProduct(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);
  if (loading || product == null) {
    // console.log("loading", loading);
    // console.log("product", product);
    // console.log("length", product?.size.length);
    return <h1>Loading</h1>;
  }
  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col xs={12} md={6} className="product-detail-img">
            <img src={product.img} />
          </Col>
          <Col xs={12} md={6}>
            <div className="product-info">{product.title}</div>
            <div className="product-info">₩ {product.price}</div>
            <div className="choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size?.length > 0 &&
                  product.size.map((item, index) => (
                    <Dropdown.Item href="#/action-1" key={index}>{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
