importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyA3o3CHKaORvCNlNpUCIU2MmaeVM6w_coo",
  authDomain: "chatx-781cf.firebaseapp.com",
  projectId: "chatx-781cf",
  messagingSenderId: "339379296949",
  appId: "1:339379296949:web:e793f99a0b9b1f16553cfc"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "icon.png"
  });
});
