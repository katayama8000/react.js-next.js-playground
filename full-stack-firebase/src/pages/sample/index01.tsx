import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { auth } from '@lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signInWithCustomToken,
} from 'firebase/auth';
import axios from 'axios';

const Index01: NextPage = () => {
  const name = process.env.NEXT_PUBLIC_NAME;
  const email = 'test01@gmail.com';
  const password = 'test01';

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log('onAuthStateChanged');
      console.log({ user });
    });
    return () => unsubscribe();
  }, []);

  const createUser = async () => {
    console.log('createUser');
    const user = await createUserWithEmailAndPassword(auth, email, password);
    console.log({ user });
  };

  const getUser = async () => {
    console.log('getUser');
    const user = auth.currentUser;
    console.log({ user });
  };

  const changeDisplayName = async () => {
    console.log('changeDisplayName');
    if (!auth.currentUser) return;
    updateProfile(auth.currentUser, {
      displayName: 'test02',
    });
  };

  const signIn = async () => {
    console.log('signIn');
    const user = await signInWithEmailAndPassword(auth, email, password);
    console.log({ user });
  };

  const signOut = async () => {
    console.log('signOut');
    await auth.signOut();
  };

  const setCustomClaims = async () => {
    const user = auth.currentUser;
    if (!user) return;
    const token = await user.getIdToken();
    const uid = user.uid;
    console.log({ token });
    console.log({ uid });

    // hello.tsにfetch
    const res = await fetch('/api/hello');
    const data = await res.json();
    console.log({ data });

    try {
      //   const res = await axios.post(`/api/setCustomClaims?uid=${uid}`, null, {
      //     headers: {
      //       'Content-Type': 'application/json',
      //       Authorization: `Bearer ${token}`,
      //     },
      //   });
      //   const data = res.data;
      //   console.log({ data });
      //   if (!res.ok) {
      //     throw new Error(data.message || 'Failed to set custom claims.');
      //   }
      //   return data;
    } catch (error) {
      console.log('error', error);
      throw new Error('Failed to set custom claims.');
    }
  };

  const signInCustomToken = async () => {
    const customToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImlhdCI6MTY4NzUyNDk4MiwiZXhwIjoxNjg3NTI4NTgyLCJpc3MiOiJmaXJlYmFzZS1hZG1pbnNkay1ycHF5NEBrYXRheWFtYS1zYW5kYm94LTYzOWVmLmlhbS5nc2VydmljZWFjY291bnQuY29tIiwic3ViIjoiZmlyZWJhc2UtYWRtaW5zZGstcnBxeTRAa2F0YXlhbWEtc2FuZGJveC02MzllZi5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInVpZCI6IkdIUWhSc1NSVENkbjJkbW16RXp3TWY5VHdVbTIifQ.PIfEuV23hdWHtzC6wfYs__DWkc1wGUqaZTGHgW5Ghqdo12yFhoszvoKa4jT2FfzF6JUc3n2OyNkJ9kOmaG7im14PKL7DsHXruIUu-NgCJQNy3vjy2Wu52w-o4VM-pYdIwuNeqn8erwPYb3uJEj36Go8hsgL-rPnLcQezxmX43E9mrtArLV3HcKwLHRjBtdh1qoZOF0nMMH9yMQVvvYdU6X4_b7bS7B-xNoZ9YVWx0-Lw5INJGaOXzAhEL_xkPAeJRgWPZlDM9xj-1l5pjCvshx1VNapzlx2DzSsRSIHFo_nEdVfkCUn13SwLouwsLVt0k7IEJjNbfeVyJAWbvheR4Q"
    const res = await signInWithCustomToken(auth, customToken);
    console.log({ res });
  }

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={createUser}>createUser</button>
      <button onClick={getUser}>getUser</button>
      <button onClick={changeDisplayName}>changeDisplayName</button>
      <button onClick={signIn}>signIn</button>
      <button onClick={signOut}>signOut</button>
      <button onClick={setCustomClaims}>setCustomClaims</button>
      <button onClick={signInCustomToken}>signInCustomToken</button>
    </div>
  );
};

export default Index01;
