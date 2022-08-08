import styled from 'styled-components';

const Header = () => {
  return (
    <NavBar>
      <div>My Todo List</div>
      <div>React</div>
    </NavBar>
  );
};

export default Header;

const NavBar = styled.div`
  background: white;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 1px 1px 3px 1px grey;
  font-size: 20px;
`;
