import firebaseApp from 'firebase';

// Make sure you swap this out with your Firebase app's config
const config = {
  apiKey: "AIzaSyBhdbdZDMHjy6pGFax1O4jG6OORJ9aebuo",
  authDomain: "site-vitrine-c87e8.firebaseapp.com",
  databaseURL: "https://site-vitrine-c87e8.firebaseio.com",
  projectId: "site-vitrine-c87e8",
  storageBucket: "site-vitrine-c87e8.appspot.com",
  messagingSenderId: "1030858595935"
};

const firebase = firebaseApp.initializeApp(config)

;
export default firebase;
