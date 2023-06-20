import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { auth } from '@lib/firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
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

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={createUser}>createUser</button>
      <button onClick={getUser}>getUser</button>
      <button onClick={changeDisplayName}>changeDisplayName</button>
      <button onClick={signIn}>signIn</button>
      <button onClick={signOut}>signOut</button>
      <button onClick={setCustomClaims}>setCustomClaims</button>
    </div>
  );
};

export default Index01;
