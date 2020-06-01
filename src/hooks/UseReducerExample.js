import React, { useCallback, useReducer } from "react";
import { Text, Container, Input, Button, Box } from "../styles";

const initialState = {
  name: "",
  designation: ""
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload };
    case "UPDATE_DESIGNATION":
      return { ...state, designation: action.payload };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const { name, designation } = state;

  const updateName = useCallback(({ target: { value } }) => {
    dispatch({
      type: "UPDATE_NAME",
      payload: value
    });
  }, []);

  const updateDesignation = useCallback(({ target: { value } }) => {
    dispatch({
      type: "UPDATE_DESIGNATION",
      payload: value
    });
  }, []);

  const submit = useCallback(() => {
    console.log(name, designation);
  }, [name, designation]);

  return (
    <Box flexDirection="column" width={500}>
      <Text fontSize={24}>
        <strong>Add User</strong>
      </Text>
      <Container>
        <Text width={150}>Name:</Text>
        <Input value={name} onChange={updateName} />
      </Container>
      <Container>
        <Text width={150}>Designation:</Text>
        <Input value={designation} onChange={updateDesignation} />
      </Container>
      <Button onClick={submit}>Submit</Button>
    </Box>
  );
};

export default UseReducerExample;
