import { NextPage } from 'next';
import React from 'react';

const Index01: NextPage = () => {
  const name = process.env.NEXT_PUBLIC_NAME;
  return <div>{name}</div>;
};

export default Index01;
