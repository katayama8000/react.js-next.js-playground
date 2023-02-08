import { Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { atom, useAtom } from '../lib/jotai-core';

const userAtom = atom({ name: 'John', age: 20 });

const buttonStyle = {
  border: '1px solid black',
  padding: '5px',
  margin: '5px',
  borderRadius: '5px',
};
const Index13 = () => {
  const [user, setUser] = useAtom(userAtom);
  return (
    <div>
      <Text fontWeight={'bold'} fontSize={'2xl'}>
        jotai-core
      </Text>
      <span>
        {user.name}/{user.age}
      </span>
      <button
        onClick={() => {
          setUser({ ...user, age: user.age + 1 });
        }}
        style={buttonStyle}
      >
        add age
      </button>
      <button
        onClick={() => {
          setUser({ name: 'mike', age: 21 });
        }}
        style={buttonStyle}
      >
        change User
      </button>
    </div>
  );
};

export default Index13;
