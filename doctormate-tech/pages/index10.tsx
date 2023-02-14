import { signInWithEmailAndPassword, User } from "firebase/auth";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useState } from "react";
import { auth } from "../firebase/firebase";
import {
  getUserEmailAtom,
  setUserAtom,
  userAtom,
  getThemeAtom,
} from "../state/user.state";

const InputStyle = {
  border: "1px solid white",
  borderRadius: "5px",
  padding: "5px",
  margin: "5px",
  color: "black",
};

const ButtonStyle = {
  border: "4px double white",
  borderRadius: "5px",
  padding: "5px 20px",
  margin: "5px",
};

const Index10 = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const setUser = useSetAtom(setUserAtom);
  const userEmail = useAtomValue(getUserEmailAtom);
  const themeColor = useAtomValue(getThemeAtom);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user: User = userCredential.user;
        setUser(user);
        alert("success");
      })
      .catch(() => {
        alert("failed");
      });
  };
  return (
    <div
      style={{
        backgroundColor: themeColor,
        color: "white",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "400px",
          margin: "auto",
          paddingTop: "50px",
        }}
      >
        <div
          style={{
            border: "1px solid white",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            firebase-jotai
          </h1>
          <div>
            <label>email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={InputStyle}
            />
          </div>
          <div>
            <label
              style={{
                paddingRight: "10px",
              }}
            >
              password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={InputStyle}
            />
          </div>
          <button onClick={handleLogin} style={ButtonStyle}>
            login
          </button>
          <p>
            <span>{userEmail && `welcome ${userEmail} !!!`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index10;
