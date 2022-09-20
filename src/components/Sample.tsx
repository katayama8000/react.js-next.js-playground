import { Button } from "@mantine/core";
import React from "react";
import { FC } from "react";

type Props = {
  child: string;
};
export const Sample: FC<Props> = ({ child }) => {
  return (
    <div>
      <div className="text-green-500">{child}</div>
      <Button className="m-3">Hello Button</Button>
      <Button className="m-3">Hello Button</Button>
    </div>
  );
};
