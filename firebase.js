import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDC6lHg1faKLHxoCYafQPMki22gALngk94",
    authDomain: "uploader-ad50a.firebaseapp.com",
    projectId: "uploader-ad50a",
    storageBucket: "uploader-ad50a.appspot.com",
    messagingSenderId: "126517613084",
    appId: "1:126517613084:web:ee979d39488c8bae0605d9"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)