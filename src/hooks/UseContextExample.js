import React, { useState, useContext, createContext } from "react";
import { Text, Container, Input, Button, Box } from "../styles";

const ProfileContext = createContext({});

const UseContextExample = () => {
  const [profile, setProfile] = useState({ name: "", designation: "" });

  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      <Login />
      <Profile />
    </ProfileContext.Provider>
  );
};

const Login = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const { setProfile } = useContext(ProfileContext);

  return (
    <Box flexDirection="column" width={500}>
      <Text fontSize={24}>
        <strong>Login</strong>
      </Text>
      <Container>
        <Text width={150}>Name:</Text>
        <Input
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </Container>
      <Container>
        <Text width={150}>Designation:</Text>
        <Input
          value={designation}
          onChange={({ target: { value } }) => setDesignation(value)}
        />
      </Container>
      <Button onClick={() => setProfile({ name, designation })}>Submit</Button>
    </Box>
  );
};

const Profile = () => {
  const { profile } = useContext(ProfileContext);

  return (
    <Box flexDirection="column" width={500}>
      <Text fontSize={24}>
        <strong>Your Profile</strong>
      </Text>
      <Container>
        <Text >Name:</Text>
        <Text>{profile.name}</Text>
      </Container>
      <Container>
        <Text>Designation:</Text>
        <Text>{profile.designation}</Text>
      </Container>
    </Box>
  );
};

export default UseContextExample;
