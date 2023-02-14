import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";
import { Box, Button, Input } from "@chakra-ui/react";
import { auth } from "../firebase/firebase";
import { useAtomValue, useSetAtom } from "jotai";
import { getUserEmailAtom, setUserAtom } from "../state/user.state";

const Index9 = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUser = useSetAtom(setUserAtom);
  const userEmail = useAtomValue(getUserEmailAtom);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user: User = userCredential.user;
        setUser(user);
        console.log(user);
        toast({
          title: "success",
          description: "Document successfully written!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
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
      <div>
        <h1>mail: {userEmail && userEmail}</h1>
      </div>
    </div>
  );
};

export default Index9;
function toast(arg0: {
  title: string;
  description: string;
  status: string;
  duration: number;
  isClosable: boolean;
}) {
  throw new Error("Function not implemented.");
}
