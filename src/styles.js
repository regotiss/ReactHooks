import styled from 'styled-components';

export const Body = styled.div`
  margin: 0;
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const Text  = styled.p`
    font-size: 20px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: ${({flexDirection}) => flexDirection || 'row'};
  ${({fullHeight}) => fullHeight && 'height: 100%;'}
  ${({color}) => color && `background-color: ${color};`}
`;

export const NavContainer = styled.ul`
  width: 200px;
  border-right: 1px solid black;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 24px;
  margin: 10px;
`;