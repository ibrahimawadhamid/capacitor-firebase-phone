import { registerPlugin } from '@capacitor/core';

import type { FirebasePhonePlugin } from './definitions';

const FirebasePhone = registerPlugin<FirebasePhonePlugin>('FirebasePhone', {
  web: () => import('./web').then(m => new m.FirebasePhoneWeb()),
});

export * from './definitions';
export { FirebasePhone };
