import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState} from 'react';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import {shoesDetailData} from './data';

function App() {
  const [shoes] = useState(shoesDetailData);

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='#home'>ShoesShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='#menu'>Home</Nav.Link>
            <Nav.Link href='#cart'>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className='main-bg'></div>

      <Container>
        <Row>
          {shoes.map((a, i) => {
            return <Cards shoes={shoes[i]} key={i} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

const Cards = ({shoes}) => {
  return (
    <Col sm>
      <img
        src={
          'https://codingapple1.github.io/shop/shoes' + (shoes.id + 1) + '.jpg'
        }
      />
      <h5>{shoes.title}</h5>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
    </Col>
  );
};

export default App;
