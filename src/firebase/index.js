import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAFU-otCUemLVAZBKQGR4vhZP8Nu4Rqdn4",
  authDomain: "spice-masters-india.firebaseapp.com",
  projectId: "spice-masters-india",
  storageBucket: "spice-masters-india.appspot.com",
  messagingSenderId: "57915784303",
  appId: "1:57915784303:web:689b15f84282b123cba19a",
  measurementId: "G-JQRWDXQHSF"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
