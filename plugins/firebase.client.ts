// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products tha't you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default defineNuxtPlugin(nuxtApp => {
    const firebaseConfig = {
        apiKey: "AIzaSyAZYvlnJK2fHRdVIHYiMdW63V1rrIn3EXc",
        authDomain: "jamgramfirebase.firebaseapp.com",
        projectId: "jamgramfirebase",
        storageBucket: "jamgramfirebase.appspot.com",
        messagingSenderId: "1087141040753",
        appId: "1:1087141040753:web:f30343c62e027f5fba41d0",
        measurementId: "G-6WH6WXY4GJ"
      };
      
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      return {
        provide: {
            auth: () => auth,
        }
      }
  })