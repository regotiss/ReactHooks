import React, { useState } from "react";
import { Text, Container, Button, Logo } from "../styles";
import Tweety from '../images/tweety.png';

const UseStateExample2 = () => {
  const [count, setCount] = useState(0);

  return (
    <Container flexDirection="column">
      <Text align="center" fontSize={24}><strong>useState</strong></Text>
      <Container>
        <Button onClick={() => setCount(count => count - 1)}>-</Button>
        <Text>{count}</Text>
        <Button onClick={() => setCount(count => count + 1)}>+</Button>
      </Container>
      <Logo blur={count} src={Tweety} />
    </Container>
  );
};

export default UseStateExample2;
