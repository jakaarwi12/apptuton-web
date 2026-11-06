// web/firebase-messaging-sw.js

importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// GANTI dengan konfigurasi Firebase project kamu
firebase.initializeApp({
  apiKey: "AIzaSyBJFlK6LemR4G6EkA3mYWVqW_8OQGz94h4",
  authDomain: "tutonapp.firebaseapp.com",
  projectId: "tutonapp",
  storageBucket: "tutonapp.firebasestorage.app",
  messagingSenderId: "172453362893",
  appId: "1:172453362893:web:bc3848f7143fad844d3d84",
});

// Inisialisasi messaging
const messaging = firebase.messaging();

// Optional: handle background message
messaging.onBackgroundMessage(function(payload) {
  console.log('📩 [firebase-messaging-sw.js] Pesan background diterima:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
