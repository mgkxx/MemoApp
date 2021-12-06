import React from 'react';
import { View, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import MemoList from '../components/MemoList';
import Cl from '../components/CircleButton';

export default function MemoListSc() {
  return (
    <View style={styles.container}>
      {/* AppBarファイルのdefault functionが返却される */}
      <AppBar />

      {/* MemoListファイルのdefault functionが返却される */}
      <MemoList />

      {/* CircleButtonファイルのdefault functionが返却される */}
      {/* <Cl>+</Cl>の中の"+"は、propsのchildrenで取得できる */}
      <Cl>+</Cl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // Webは横に並ぶが、ReactNativeは縦に並ぶ
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
