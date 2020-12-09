import * as firebase from 'firebase/app';
import 'firebase/firestore';
import Constants from 'expo-constants';
/* types */
import { Shop } from '../types/shop';

if (!firebase.apps.length) {
  firebase.initializeApp(Constants.manifest.extra.firebase);
}

// Firebase Storeからストア情報を取得する
export const getShops = async () => {
  const snapshot = await firebase.firestore().collection('shops').get();
  const shops = snapshot.docs.map((doc) => doc.data() as Shop);
  return shops;
};
