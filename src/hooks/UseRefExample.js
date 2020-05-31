import React, { useCallback, useRef, useState } from "react";
import { Text, Container, Input, Button, Box } from "../styles";

const UseRefExample = () => {
    const [showError, setShowError] = useState(false);
    const inputRef = useRef();

    const submit = useCallback(() => {
        setShowError(true);
        inputRef.current.scrollIntoView({ behavior: 'smooth'});
    }, []);

    return (
        <Box flexDirection="column" width={500}> 
            <Text fontSize={24}><strong>Submit Form</strong></Text>
            <Container>
                <Text>Name:</Text>
                <Container flexDirection="column">
                    <Input ref={inputRef} error={showError}/>
                    {showError && <Text fontSize={15} color="red">Please enter name</Text>}
                </Container>
            </Container>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Button onClick={submit}>Submit</Button>
        </Box>
    );
};

export default UseRefExample;