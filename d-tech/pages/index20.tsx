import {
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';

const Index20 = () => {
  const getDocumentRef = async () => {
    console.log('getDocumentRef');
    const ref = doc(db, 'cities', 'LA');
    console.log(ref);
    const snapshot = await getDoc(ref);
    console.log(snapshot);
    snapshot.exists() ? console.log(snapshot.data()) : console.log('no data');
    console.log(ref.type);
  };

  const getCollectionRef = async () => {
    console.log('getCollectionRef');
    const collectionRef = collection(db, 'cities');
    console.log(collectionRef);
    console.log(collectionRef.path);
    const queruSnapshot = await getDocs(collectionRef);
    console.log(queruSnapshot.query);
    queruSnapshot.forEach((doc) => {
      console.log(doc.id, ' => ', doc.data());
    });
  };

  const test = async () => {
    const citiesRef = collection(db, 'cities');

    await setDoc(doc(citiesRef, 'SF'), {
      name: 'San Francisco',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 860000,
      regions: ['west_coast', 'norcal'],
    });
    await setDoc(doc(citiesRef, 'LA'), {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA',
      capital: false,
      population: 3900000,
      regions: ['west_coast', 'socal'],
    });
    await setDoc(doc(citiesRef, 'DC'), {
      name: 'Washington, D.C.',
      state: null,
      country: 'USA',
      capital: true,
      population: 680000,
      regions: ['east_coast'],
    });
    await setDoc(doc(citiesRef, 'TOK'), {
      name: 'Tokyo',
      state: null,
      country: 'Japan',
      capital: true,
      population: 9000000,
      regions: ['kanto', 'honshu'],
    });
    await setDoc(doc(citiesRef, 'BJ'), {
      name: 'Beijing',
      state: null,
      country: 'China',
      capital: true,
      population: 21500000,
      regions: ['jingjinji', 'hebei'],
    });
  };
  return (
    <div>
      <h1>try firebase</h1>
      <button onClick={getDocumentRef} style={{ margin: '10px' }}>
        getDocumentRef
      </button>
      <button onClick={getCollectionRef} style={{ margin: '10px' }}>
        getCollectionRef
      </button>
      <button onClick={test}>test</button>
    </div>
  );
};

export default Index20;
