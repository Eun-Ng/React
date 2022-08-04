import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';

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

export {Cards};
