import {
  QuerySnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
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
    const ref = collection(db, 'cities');
    console.log(ref);
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
