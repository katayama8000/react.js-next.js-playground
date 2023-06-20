// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from './lib/firebaseAdmin';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const db = firebaseAdmin.firestore();
  // write
  db.collection('users').add({
    first: 'mike',
    last: 'Lovelace',
    born: 1815,
  });

  //   const uid = req.query.uid as string;

  //   auth()
  //     .setCustomUserClaims(uid, { admin: true })
  //     .then(() => {
  //       console.log('setCustomUserClaims');
  //     })
  //     .catch((error) => {
  //       console.log('setCustomUserClaims error', error);
  //     });

  res.status(200).json({ name: 'claims' });
}
