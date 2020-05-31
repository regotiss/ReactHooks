import React, { useState } from "react";
import { Text, Container, Button, Logo } from "../styles";
import Tweety from '../images/tweety.png';

const UseStateExample1 = () => {
  const [count, setCount] = useState(0);

  return (
    <Container flexDirection="column">
      <Text align="center" fontSize={24}><strong>useState</strong></Text>
      <Container>
        <Button onClick={() => setCount(5)}>0</Button>
        <Button onClick={() => setCount(50)}>50</Button>
        <Button onClick={() => setCount(100)}>100</Button>
      </Container>
      <Text align="center">{count}</Text>
      <Logo gray={count} src={Tweety} />
    </Container>
  );
};

export default UseStateExample1;
