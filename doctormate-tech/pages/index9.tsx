import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { Box, Button, Input } from "@chakra-ui/react";
import { auth } from "../firebase/firebase";

const Index9 = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user: User = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div>
      <Box>
        <h1>firebase-auth</h1>
        <Button onClick={handleLogin}>login</Button>
        <Input
          type="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
    </div>
  );
};

export default Index9;
