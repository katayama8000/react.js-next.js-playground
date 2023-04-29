import React from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebase';

const index21 = () => {
  const allCapital = async () => {
    console.log('allCapital');
    const citiesRef = collection(db, 'cities');
    const q = query(citiesRef, where('capital', '==', true));
    console.log(q);
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  };
  return (
    <div>
      <h1>complex</h1>
      <button onClick={allCapital}>all capital</button>
    </div>
  );
};

export default index21;
