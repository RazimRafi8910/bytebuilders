import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js'
import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js'
import env from '../env.js';

const KEY = env.fireStoreKey;

const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId,
    measurementId: env.measurementId
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
  

const db = getFirestore(app);

async function addUserMessage( data ) {
    try {
        const result = await addDoc(collection(db, 'userMessages'), {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            secretKey:KEY
        });
        
        return result.id
    } catch (error) {
        throw new Error(error.message)
    }
}

export { addUserMessage }