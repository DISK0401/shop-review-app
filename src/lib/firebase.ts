import * as firebase from 'firebase/app';
import 'firebase/firestore';
/* types */
import { Shop } from '../types/shop';

if (!firebase.apps.length) {
  const firebaseConfig = {
    apiKey: 'AIzaSyAQ7Y1MWsCfELjTt-2ItkvKCrFs5PRj65w',
    authDomain: 'shop-review-app-5da37.firebaseapp.com',
    projectId: 'shop-review-app-5da37',
    storageBucket: 'shop-review-app-5da37.appspot.com',
    messagingSenderId: '17232650988',
    appId: '1:17232650988:web:09fa3e4ce455b77aecbbc9',
    measurementId: 'G-VWH14BV67R',
  };

  firebase.initializeApp(firebaseConfig);
}

// Firebase Storeからストア情報を取得する
export const getShops = async () => {
  const snapshot = await firebase.firestore().collection('shops').get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};
