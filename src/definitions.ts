export interface FirebasePhonePlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
  initFirebase(options: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
  }): Promise<boolean>;
  verifyPhoneNumber(options: {
    phoneNumber: string;
  }): Promise<{ verificationID: string }>;
}
