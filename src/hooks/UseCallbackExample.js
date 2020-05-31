import React, { useState, useEffect, useCallback } from 'react';
import { Logo, Text, Container } from '../styles';
import { EMOJIS } from '../constants'; 

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const UseCallbackExample = () => {
    const [selectedEmoji, setSelectedEmoji] = useState('');
    const [color, setColor] = useState(getRandomColor);
    
    const selectEmoji = useCallback((emoji) => {
        setSelectedEmoji(emoji.emotion);
        setColor(getRandomColor);
    }, []);

    useEffect(() => {
        selectEmoji(EMOJIS[0]);
    }, [selectEmoji]);

    return (
        <Container color={color}>
            {EMOJIS.map(emoji => <Logo key={emoji.emotion} src={emoji.image} onClick={() => setSelectedEmoji(emoji.emotion)} />)}
            {selectedEmoji && <Text>{selectedEmoji}</Text>}
        </Container>
    );
};

export default UseCallbackExample;