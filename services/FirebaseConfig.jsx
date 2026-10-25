// Import the functions you need from the SDKs you need
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import { Platform } from "react-native";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-diet-planner-e9df8.firebaseapp.com",
  projectId: "ai-diet-planner-e9df8",
  storageBucket: "ai-diet-planner-e9df8.firebasestorage.app",
  messagingSenderId: "520240711646",
  appId: "1:520240711646:web:dac4fa68e51a434b65bf4f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth =
  Platform.OS == "web"
    ? getAuth(app)
    : initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
      });
