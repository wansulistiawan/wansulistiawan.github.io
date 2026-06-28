import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAoALXJUhKhNcc4efEQA7Pm8CEXhh-rfbM",
  authDomain: "sisfo-29f47.firebaseapp.com",
  projectId: "sisfo-29f47",
  storageBucket: "sisfo-29f47.firebasestorage.app",
  messagingSenderId: "368287586695",
  appId: "1:368287586695:web:2ee0cf06bd0c39ed609b22",
  measurementId: "G-0T2K4917JX"
};

// Inisialisasi Firebase App
export const app = initializeApp(firebaseConfig);

// Inisialisasi Firestore dengan Mesin Cache Lokal Cerdas (Menghemat 95% Kuota Reads)
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({
      tabManager: persistentMultipleTabManager()
  })
});
