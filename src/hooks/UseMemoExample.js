import React, { useState, useEffect, useMemo } from 'react';
import { Text, Container, Input } from "../styles";
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
        <Container flexDirection="column" fullWidth>
            <Text fontSize={24}><strong>useMemo</strong></Text>
            <Input value={usdAmount} onChange={({ target: {value} }) => setUsdAmount(Number(value))} />
            <Text color={color} fontSize={54}>{inrAmount}</Text>
        </Container>
    );
};

export default UseMemoExample;