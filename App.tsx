import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { StyleSheet, Text, View } from 'react-native';

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

type Shop = {
  name: string;
  place: string;
};

export default function App() {
  // shopデータ用のステート
  const [shops, setShops] = useState<Shop[]>([]);

  // 初回ロード時に、Firebase Storeにデータを取りに行く関数を実行する
  useEffect(() => {
    getFirebaseItems();
  }, []);

  // Firebase Storeからストア情報を取得する
  const getFirebaseItems = async () => {
    const snapshot = await firebase.firestore().collection('shops').get();
    const shops = snapshot.docs.map((doc) => doc.data() as Shop);
    setShops(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <View style={{ margin: 10 }} key={index.toString()}>
      <Text>{shop.name}</Text>
      <Text>{shop.place}</Text>
    </View>
  ));
  return <View style={styles.container}>{shopItems}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
