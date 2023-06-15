import { doc, getDoc, getDocFromCache } from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';

const Index22 = () => {
  const getdoc = async () => {
    console.log('getdoc');
    const ref = doc(db, 'cities', 'SF');
    console.log(ref);
    const snap = await getDoc(ref);
    console.log(snap.metadata);
  };

  const getdocfromcache = async () => {
    console.log('getdocfromcache');
    const ref = doc(db, 'cities', 'SF');
    console.log(ref);
    // 何か設定が必要
    // const snap = await getDocFromCache(ref);
    // console.log(snap.metadata);
  };
  return (
    <div>
      <h1>off</h1>
      <button onClick={getdoc} style={{ padding: '10px' }}>
        getdoc
      </button>
      <button onClick={getdocfromcache} style={{ padding: '10px' }}>
        getdocfromcache
      </button>
    </div>
  );
};

export default Index22;
