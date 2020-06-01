import styled from 'styled-components';
import  { Link } from 'react-router-dom';

export const Body = styled.div`
  margin: 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #282c34;
  min-height: 100vh;
  height: 100%;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const Text  = styled.p`
    font-size: ${({fontSize}) => `${fontSize || 20}px`};
    text-align: ${({align}) => align || 'left'};
    ${({color}) => color && `color: ${color};`}
    ${({width}) => width && `width: ${width}px;`}
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  ${({fullHeight}) => fullHeight && 'min-height: 100vh;'}
  ${({fullWidth}) => fullWidth && 'flex: 1;'}
  ${({color}) => color && `background-color: ${color};`}
  ${({width}) => width && `width: ${width}px;`}
  padding-left: 20px;
`;

export const NavContainer = styled.ul`
  border-right: 1px solid white;
  list-style: none;
  padding-right: 20px;
`;

export const NavItem = styled(Link)`
  color: #61dafb;
  text-decoration: none;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 24px;
  padding: 10px; 
  margin: 10px;
`;

export const Logo = styled.img`
  width: 200px;
  height: 200px;  
  ${({gray}) => gray && `filter: grayscale(${gray}%);`}
  ${({blur}) => blur && `filter: blur(${-blur}px);`}
  padding: 20px;
`;

export const Input = styled.input`
  width: 300px;
  height: 50px;
  font-size: 20px;
  ${({error}) => error && `border: 2px solid red;`}
`;

export const Box = styled(Container)`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.22);
  color: #282c34;
  margin: 20px;
`;