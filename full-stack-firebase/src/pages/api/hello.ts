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
  const db = firebaseAdmin.firestore();
  // write
  db.collection('users').add({
    first: 'john',
    last: 'Lovelace',
    born: 1815,
  });

  //setCustomUserClaims

  firebaseAdmin
    .auth()
    .setCustomUserClaims('uid', { admin: true })
    .then(() => {
      // The new custom claims will propagate to the user's ID token the
      // next time a new one is issued.
    });

  res.status(200).json({ name: 'John Doe' });
}
