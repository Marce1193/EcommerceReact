import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import data from '../data/products.json'



export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve (data), 2000)
      })

      promise.then(data => setProducts(data))
    }, [])

    return (
        <Container className='mt-4'>
            <h1>{props.greeting}</h1>
            <div>
                {products.map(product => (
                    <Card key={product.id} style={{ width: '18rem' }}>
                    <Card.Img variant="top" style={{height:"100%"}} src={product.image} />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        {product.category}
                      </Card.Text>
                      <Button variant="secondary">Agregar al carrito</Button>
                    </Card.Body>
                  </Card>
                ))}
            </div>
        </Container>
    )
}