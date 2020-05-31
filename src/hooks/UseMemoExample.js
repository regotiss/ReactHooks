import React, { useState, useEffect, useMemo } from 'react';
import { Text, Container } from "../styles";
import { getRandomColor } from '../helper';

const RATE = 75.52;
const UseMemoExample = () => {
    const [usdAmount, setUsdAmount] = useState(0);
    const [color, setColor] = useState();

    const inrAmount = useMemo(() => {
        console.log('calculate inr amount');
        return RATE * usdAmount;
    }, [usdAmount]);

    useEffect(() => {
        setColor(getRandomColor);
      }, [usdAmount]);

    return (
        <Container color={color}>
            <input value={usdAmount} onChange={({ target: {value} }) => setUsdAmount(Number(value))} />
            <Text>{inrAmount}</Text>
        </Container>
    );
};

export default UseMemoExample;