import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
        apiKey: "AIzaSyBPrXnqSGV7F86WUWIdrVx55ADmkzNMQS4",
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: "https://b-vision-18af8.firebaseio.com",
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACTA_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
      });

export const auth = app.auth();
export default app;