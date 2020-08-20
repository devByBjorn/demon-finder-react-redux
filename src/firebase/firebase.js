// import core firebase client (required)
import firebase from '@firebase/app';

// import Firebase Authentication (optional)
import '@firebase/auth';

// import Firebase Realtime Database (optional)
import '@firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: "https://demon-finder.firebaseio.com",
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
googleAuthProvider.setCustomParameters({
  prompt: 'select_account'
})

const twitterAuthProvider = new firebase.auth.TwitterAuthProvider()
twitterAuthProvider.setCustomParameters({
  prompt: 'select_account'
})

export { firebase, googleAuthProvider, twitterAuthProvider, database as default }