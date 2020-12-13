import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
/* lib */
import { getShops } from '../lib/firebase';
/* components */
import { ShopReviewItem } from '../components/ShopReviewItem';
/* types */
import { Shop } from '../types/shop';

export const HomeScreen = () => {
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
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={shops}
        renderItem={({ item }: { item: Shop }) => (
          <ShopReviewItem shop={item} />
        )}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
