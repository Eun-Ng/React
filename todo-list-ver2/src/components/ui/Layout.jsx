import styled from 'styled-components';

const Layout = ({children}) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;

const StyledLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
`;
