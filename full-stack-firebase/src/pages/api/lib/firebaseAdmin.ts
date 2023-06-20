import admin from 'firebase-admin';

import type { ServiceAccount } from 'firebase-admin';

const serviceAccount = require('key.json') as ServiceAccount;

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export { admin as firebaseAdmin };
