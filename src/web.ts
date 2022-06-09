import { WebPlugin } from '@capacitor/core';
import { FirebaseApp, initializeApp } from 'firebase/app';

import type { FirebasePhonePlugin } from './definitions';

export class FirebasePhoneWeb extends WebPlugin implements FirebasePhonePlugin {
  firebaseApp: FirebaseApp | undefined;

  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }

  async initFirebase(options: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  }): Promise<boolean> {
    console.log('ECHO', options);
    const firebaseConfig = {
      apiKey: options.apiKey,
      authDomain: options.authDomain,
      projectId: options.projectId,
      storageBucket: options.storageBucket,
      messagingSenderId: options.messagingSenderId,
      appId: options.appId,
    };
    try {
      this.firebaseApp = initializeApp(firebaseConfig);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async verifyPhoneNumber(options: {
    phoneNumber: string;
  }): Promise<{ verificationID: string }> {
    console.log('ECHO', options.phoneNumber);
    return { verificationID: '' };
  }
}
