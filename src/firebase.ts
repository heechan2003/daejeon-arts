import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDBvQ0SMW_vYb65s-Wi213nX6x2uWfL5AY",
    authDomain: "daejeon-arts.firebaseapp.com",
    projectId: "daejeon-arts",
    storageBucket: "daejeon-arts.firebasestorage.app",
    messagingSenderId: "1051085434902",
    appId: "1:1051085434902:web:2a85a928600643ed290537",
    measurementId: "G-3B5SJNL197"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const performanceCollectionRef = collection(db, "performance_dates");
export const reviewsCollectionRef = collection(db, "reviews");
export const announcementCollectionRef = collection(db, "announcements");
export const newsLetterCollectionRef = collection(db, "newsletters");