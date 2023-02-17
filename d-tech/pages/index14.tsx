import { Button } from '@chakra-ui/react';
import {
  collection,
  doc,
  DocumentReference,
  getDoc,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';
const Index14 = () => {
  const get1 = async () => {
    console.log('getDoc');
    const familyRef: DocumentReference = doc(
      db,
      'family',
      'WbtHwgpNRA4j2fbfgpUO'
    );
    console.log(familyRef);
    const familyDoc = await getDoc(familyRef);
    console.log(familyDoc.data());
  };

  const get2 = async () => {
    const memberRef: DocumentReference = doc(
      db,
      'family',
      'WbtHwgpNRA4j2fbfgpUO',
      'member',
      'OYKba7Oa7BFKYLqqh5tm'
    );
    console.log(memberRef);
    const memberDoc = await getDoc(memberRef);
    console.log(memberDoc.data());
  };

  const get3 = async () => {
    const q = query(
      collection(db, 'family', 'WbtHwgpNRA4j2fbfgpUO', 'member'),
      orderBy('age')
    );
    const querySnapshot = await getDocs(q);
    const member = querySnapshot.docs.map((doc) => doc.data());
    console.log(member);
  };

  return (
    <div>
      <h1>firebase</h1>
      <Button onClick={get1}>doc1</Button>
      <Button onClick={get2}>doc2</Button>
      <Button onClick={get3}>collection</Button>
    </div>
  );
};

export default Index14;
