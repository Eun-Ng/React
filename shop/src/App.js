import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Button, Navbar, Container, Nav, Row, Col} from 'react-bootstrap';
import {shoesDetailData} from './data';
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import {Main} from './routes/Main';
import {Detail} from './routes/Detail';

function App() {
  const [shoes] = useState(shoesDetailData);
  const navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='light' variant='light'>
        <Container>
          <Navbar.Brand href='/'>ShoesShop</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link href='/'>Home</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Main shoes={shoes} />} />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/about' element={<About />}>
          <Route path='member' element={<div>멤버 페이지</div>} />
          <Route path='location' element={<div>위치 페이지</div>} />
        </Route>
        <Route path='*' element={<div>없는 페이지에요</div>} />
      </Routes>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
