import React, { useState } from "react";
import { Text, Container, Button } from "../styles";

const UseStateExample2 = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button onClick={() => setCount(count => count + 1)}>+</Button>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count => count - 1)}>-</Button>
    </Container>
  );
};

export default UseStateExample2;
