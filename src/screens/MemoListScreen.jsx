import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import Cl from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';

export default function MemoListSc(props) {
  const { navigation } = props;
  const [memos, setmemos] = useState([]);
  // navigationの警告をuseEffectで解消
  useEffect(() => {
    navigation.setOptions({
      // 右を省略 headerRight: () => {retrun <LogOutButton />},
      headerRight: () => <LogOutButton />,
    });
  }, []);
  // MemoListScreenの表示にnavigationを操作しようとしているので警告が出る Cannot update a component..
  useEffect(() => {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    let unsubscribe = () => {}; // 空のアローファンクション(何も実行しない)
    // ログインユーザー情報が取得できたら
    if (currentUser) {
      const ref = db
        .collection(`users/${currentUser.uid}/memos`)
        .orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          // snapShotにはmemosのリストが返却される
          snapshot.forEach((doc) => {
            console.log(doc.id, doc.data());
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          // snapShotが完了したタイミングで、setmemosに格納
          setmemos(userMemos);
        },
        (error) => {
          console.log(error);
          Alert.alert('データの読み込みに失敗しました。');
          // eslint-disable-next-line
        } // Missing trailing commaが何故か出る(eslintのエラー)
      );
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* MemoListファイルのdefault functionが返却される */}
      <MemoList memos={memos} />

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
