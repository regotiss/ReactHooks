import React from 'react';
import {Text, Container} from './styles';

const Home = () => (
    <Container flexDirection="column">
        <Text fontSize={24}><strong>React Hooks</strong></Text>
        <Text>Introduced in React 16.8.</Text>
        <Text>They let you use state and other React features without writing a class.</Text>
    </Container>
);

export default Home;