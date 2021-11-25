import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import Cl from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      {/* AppBarファイルのdefault functionが返却される */}
      <AppBar />

      {/* MemoListファイルのdefault functionが返却される */}
      <MemoList />

      {/* CircleButtonファイルのdefault functionが返却される */}
      {/* <Cl>+</Cl>の中の"+"は、propsのchildrenで取得できる */}
      <Cl>x</Cl>
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
