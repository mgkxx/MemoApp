import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import MemoList from '../components/MemoList';
import Cl from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListSc(props) {
  const { navigation } = props;
  // navigationの警告をuseEffectで解消
  useEffect(() => {
    navigation.setOptions({
      // 右を省略 headerRight: () => {retrun <LogOutButton />},
      headerRight: () => <LogOutButton />,
    });
  }, []);
  // MemoListScreenの表示にnavigationを操作しようとしているので警告が出る Cannot update a component..

  return (
    <View style={styles.container}>
      {/* MemoListファイルのdefault functionが返却される */}
      <MemoList />

      {/* CircleButtonファイルのdefault functionが返却される */}
      {/* <Cl>+</Cl>の中の"+"は、propsのchildrenで取得できる */}
      <Cl
        name="shape-circle-plus"
        onPress={() => {
          navigation.navigate('MemoCreate');
        }}
      />
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
