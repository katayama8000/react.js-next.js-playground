// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import * as admin from 'firebase-admin';
const serviceAccount = require('key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const db = admin.firestore();
  // write
  db.collection('users').add({
    first: 'Ada',
    last: 'Lovelace',
    born: 1815,
  });
  res.status(200).json({ name: 'John Doe' });
}
