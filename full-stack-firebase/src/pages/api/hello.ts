// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import { firebaseAdmin } from '@/pages/api/lib/firebaseAdmin';

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log('hello');
  // const db = firebaseAdmin.firestore();
  // // write
  // db.collection('users').add({
  //   first: 'john',
  //   last: 'Lovelace',
  //   born: 1815,
  // });

  //setCustomUserClaims

  const uid = 'GHQhRsSRTCdn2dmmzEzwMf9TwUm2';
  firebaseAdmin
    .auth()
    .setCustomUserClaims(uid, { admin: true })
    .then(() => {
      // The new custom claims will propagate to the user's ID token the
      // next time a new one is issued.
      console.log('setCustomUserClaims');
    })
    .catch((error) => {
      console.log('setCustomUserClaims error', error);
    });

  const token =
    'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3YmFiYWFiYTEwNWFkZDZiM2ZiYjlmZjNmZjVmZTNkY2E0Y2VkYTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoidGVzdDAyIiwiYWRtaW4iOnRydWUsImlzcyI6Imh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS9rYXRheWFtYS1zYW5kYm94LTYzOWVmIiwiYXVkIjoia2F0YXlhbWEtc2FuZGJveC02MzllZiIsImF1dGhfdGltZSI6MTY4NzI3NTI5OCwidXNlcl9pZCI6IkdIUWhSc1NSVENkbjJkbW16RXp3TWY5VHdVbTIiLCJzdWIiOiJHSFFoUnNTUlRDZG4yZG1tekV6d01mOVR3VW0yIiwiaWF0IjoxNjg3Mjc1Mjk4LCJleHAiOjE2ODcyNzg4OTgsImVtYWlsIjoidGVzdDAxQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJ0ZXN0MDFAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.BgICdoKgTTMsqTb-p4-5lVUcb-4Jvaojbjz50ilbzjjZVXRM48tKSlr3ijU5AhjeD1ZvPH85wr3Go7JR2f2KnsYhy__ELJ5ilbecFQWEND_LLkmSVAt9-7c7KqXsrsi3gCSavKrKVxMPXOsaetZRB34g_NwUYHOXSxdzDPsblfgx1TN8uNnjfJMKjjF8oUBfr5YuDcqQImQBRIsgTcpXDCYn33S7QKvJxmfzvSyKCsqpAxbbnPhn5STVsMmuvvqqhwq3-AtjUoJlh4q67BJAt0w40tVf7eXLysCQK_wso49_PLPAEdCSUJ7Bmg4F2u-oJFxnA79h46CxHgBaZbtMHA';

  firebaseAdmin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log('uid', uid);
      // ...
    })
    .catch((error) => {
      console.log('error', error);
      // Handle error
    });

  res.status(200).json({ name: 'John Doe' });
}
