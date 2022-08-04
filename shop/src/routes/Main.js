import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import {Cards} from '../components/Cards';

const Main = ({shoes}) => {
  return (
    <>
      <div className='main-bg'></div>

      <Container>
        <Row>
          {shoes.map((a, i) => {
            return <Cards shoes={shoes[i]} key={i} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export {Main};
