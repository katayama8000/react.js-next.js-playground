import { collection, addDoc } from 'firebase/firestore';
import React from 'react';
import { db } from '../../firebase/firebase';

const Sample01 = () => {
  const add = async () => {
    console.log('addDoc');
    const ret = await addDoc(collection(db, 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
    });
  };
  return (
    <div>
      <h1>Sample01</h1>
      <button onClick={add}>add</button>
    </div>
  );
};

export default Sample01;
