import React, { useState, useEffect } from "react";
import { Text, Container, Button } from "../styles";

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(getRandomColor);

  useEffect(() => {
    setColor(getRandomColor);
  }, [count]);

  useEffect(() => {
    console.log('component rendered');
    return () => {
        console.log('component unmounting');
    };
  });

  return (
    <Container color={color}>
      <Button onClick={() => setCount(count => count + 1)}>+</Button>
      <Text>{count}</Text>
      <Button onClick={() => setCount(count => count - 1)}>-</Button>
    </Container>
  );
};

export default UseEffectExample;
