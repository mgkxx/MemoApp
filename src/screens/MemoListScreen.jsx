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
  // レンダリング後、firestoreからログインユーザーのメモの情報を取得して、memosにセット
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
      // onSnapshot:referenceDB情報を監視(取得)する
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
    // useEffectのアロー関数内？の「return**」は、レンダリング？がアンマウント時に実行される関数
    return unsubscribe; // onSnapshotの戻り値の関数を実行で、監視終了
  }, []);

  return (
    <View style={styles.container}>
      {/* MemoListファイルのdefault functionが返却される */}
      <MemoList memos={memos} />
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
