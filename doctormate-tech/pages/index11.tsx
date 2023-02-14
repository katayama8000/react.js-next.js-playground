import { Button, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Index11 = () => {
  const [render, setRender] = useState(false);
  // 再レンダリングごとに実行される
  (async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log(res.data);
  })();

  // マウント時のみ実行される
  useEffect(() => {
    const f = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/2"
      );
      console.log(res.data);
    };
    f();
  }, []);

  useEffect(() => {
    const f = async () => {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/3"
      );
      console.log(res.data);
    };
    f();
  }, [render]);

  return (
    <div>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        fetch
      </Text>
      <Button onClick={() => setRender(!render)}>render</Button>
    </div>
  );
};

export default Index11;
