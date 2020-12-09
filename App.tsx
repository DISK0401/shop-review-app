import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
/* lib */
import { getShops } from './src/lib/firebase';
/* components */
import { ShopReviewItem } from './src/components/ShopReviewItem';
/* types */
import { Shop } from './src/types/shop';

export default function App() {
  // shopデータ用のステート
  const [shops, setShops] = useState<Shop[]>([]);

  // 初回ロード時に、Firebase Storeにデータを取りに行く関数を実行する
  useEffect(() => {
    getFirebaseItems();
  }, []);

  // Firebase Storeからストア情報を取得する
  const getFirebaseItems = async () => {
    const shops = await getShops();
    setShops(shops);
  };

  const shopItems = shops.map((shop, index) => (
    <ShopReviewItem shop={shop} key={index.toString()} />
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
