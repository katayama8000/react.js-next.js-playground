// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { firebaseAdmin } from './lib/firebaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const uid = "GHQhRsSRTCdn2dmmzEzwMf9TwUm2"
    const customToken = await firebaseAdmin.auth().createCustomToken(uid)


  res.status(200).json({ customToken })
}
