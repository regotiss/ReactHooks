import React, { useState } from "react";
import { Text, Container, Button } from "../styles";

const UseStateExample1 = () => {
  const [count, setCount] = useState(0);

  return (
    <Container>
      <Button onClick={() => setCount(5)}>5</Button>
      <Button onClick={() => setCount(10)}>10</Button>
      <Button onClick={() => setCount(15)}>15</Button>
      <Text>{count}</Text>
    </Container>
  );
};

export default UseStateExample1;
