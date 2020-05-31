import React, { useState, useEffect } from "react";
import { Text, Container, Button } from "../styles";
import { getRandomColor } from '../helper';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(getRandomColor);

  useEffect(() => {
    setColor(getRandomColor);
  }, [count]);

  useEffect(() => {
    console.log('component mounted');
    return () => {
      console.log('component unmounting');
    }; 
  }, []);

  return (
    <Container color={color}>
      <Button onClick={() => setCount(count => count + 1)}>+</Button>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count => count - 1)}>-</Button>
    </Container>
  );
};

export default UseEffectExample;
