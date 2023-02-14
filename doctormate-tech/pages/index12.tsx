import React from "react";
import { Button, Input, Text } from "@chakra-ui/react";

const Index12 = () => {
  console.log("render");
  const [render, setRender] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [fullName2, setFullName2] = React.useState("");

  const fullName1 = React.useMemo(() => {
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  React.useEffect(() => {
    setFullName2(`${firstName} ${lastName}`);
  }, [firstName, lastName]);

  const fullName3 = `${firstName} ${lastName}`;

  return (
    <div>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        Text
      </Text>
      <Input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <Input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {fullName1}
      </Text>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {fullName3}
      </Text>
      <Text fontWeight={"bold"} fontSize={"2xl"}>
        {fullName2}
      </Text>
      <Button
        onClick={() => {
          setRender(!render);
        }}
      >
        render
      </Button>
    </div>
  );
};

export default Index12;
