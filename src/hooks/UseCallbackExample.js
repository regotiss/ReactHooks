import React, { useState, useEffect, useCallback } from "react";
import { Logo, Text, Container } from "../styles";
import { EMOJIS } from "../constants";
import { getRandomColor } from "../helper";

const UseCallbackExample = () => {
  const [selectedEmoji, setSelectedEmoji] = useState("");
  const [color, setColor] = useState(getRandomColor);

  const selectEmoji = useCallback(emoji => {
    setSelectedEmoji(emoji.emotion);
    setColor(getRandomColor);
  }, []);

  useEffect(() => {
    selectEmoji(EMOJIS[0]);
  }, [selectEmoji]);

  return (
    <Container color={color} flexDirection="column" fullWidth>
      <Container>
        {EMOJIS.map(emoji => (
          <Logo
            key={emoji.emotion}
            src={emoji.image}
            onClick={() => setSelectedEmoji(emoji.emotion)}
          />
        ))}
      </Container>
      {selectedEmoji && (
        <Text align="center" fontSize={30}>
          <strong>{selectedEmoji}</strong>
        </Text>
      )}
    </Container>
  );
};

export default UseCallbackExample;
