import { Button } from '@chakra-ui/react';
import {
  collection,
  doc,
  DocumentReference,
  DocumentSnapshot,
  getDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from 'firebase/firestore';
import React from 'react';
import { db } from '../firebase/firebase';
import { facilityUserConverter } from '../lib/converter/facilityUser.converter';

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

  const getGender = async () => {
    const q = query(collection(db, 'master', 'v1', 'gender'));
    console.log(q);
    const querySnapshot = await getDocs(q);
    const gender = querySnapshot.docs.map((doc) => doc.data());
    console.log(gender);
  };

  type TFUser = {
    firstName: string;
    birthDate: Timestamp;
    gernderRef: DocumentReference;
  };

  const getFacilityUser = async () => {
    const facilityUserRef: DocumentReference = doc(
      db,
      'facilities',
      'test',
      'facilityUsers',
      'PXyujDa3M9PSEBcqNCld'
    ).withConverter(facilityUserConverter);

    const facilityUserDoc: DocumentSnapshot = await getDoc(facilityUserRef);
    console.log(facilityUserDoc);
    console.log(facilityUserDoc.data());
    const gernderRef = facilityUserDoc.data()?.gender;
    console.log(gernderRef);
    const genderDoc = await getDoc(gernderRef);
    console.log(genderDoc.data());
  };

  return (
    <div>
      <h1>firebase</h1>
      <Button onClick={get1} mx={2}>
        doc1
      </Button>
      <Button onClick={get2} mx={2}>
        doc2
      </Button>
      <Button onClick={get3} mx={2}>
        collection
      </Button>
      <Button onClick={getGender} mx={2}>
        gender
      </Button>
      <Button onClick={getFacilityUser}>getFacilityUser</Button>
    </div>
  );
};

export default Index14;
