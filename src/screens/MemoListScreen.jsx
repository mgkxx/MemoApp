import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Alert, Text } from 'react-native';
import firebase from 'firebase';

import MemoList from '../components/MemoList';
import Cl from '../components/CircleButton';
import LogOutButton from '../components/LogOutButton';
import Button from '../components/Button';
import Loading from '../components/Loading';

export default function MemoListSc(props) {
  const { navigation } = props;
  const [memos, setmemos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
    // const hatena = firebase.auth(); // mailAddresなども確認できた
    // console.log(hatena);
    const db = firebase.firestore();
    let unsubscribe = () => {}; // 空の関数(何も実行しない)
    // ログインユーザー情報が取得できたら
    if (currentUser) {
      setIsLoading;
      setIsLoading(true);
      const ref = db
        .collection(`users/${currentUser.uid}/memos`)
        .orderBy('updatedAt', 'desc');
      // onSnapshot:referenceDB情報を監視(取得)する
      unsubscribe = ref.onSnapshot(
        (snapshot) => {
          const userMemos = [];
          // snapShotにはmemosのリストが返却される
          snapshot.forEach((doc) => {
            // console.log(doc.id, doc.data());
            const data = doc.data();
            userMemos.push({
              id: doc.id,
              bodyText: data.bodyText,
              updatedAt: data.updatedAt.toDate(),
            });
          });
          // snapShotが完了したタイミングで、setmemosに格納
          setmemos(userMemos);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setIsLoading(false);
          Alert.alert('データの読み込みに失敗しました。');
          // eslint-disable-next-line
        } // Missing trailing commaが何故か出る(eslintのエラー)
      );
    }
    // useEffectのアロー関数内？の「return**」は、レンダリング？がアンマウント時に実行される関数
    return unsubscribe; // onSnapshotの戻り値の関数を実行で、監視終了
  }, []);

  // lenght:配列の要素数を取得
  if (memos.length === 0) {
    return (
      <View style={emptyStyles.container}>
        <Loading isLoading={isLoading} />
        <View style={emptyStyles.inner}>
          <Text style={emptyStyles.title}>メモを作成しよう!</Text>
          <Button
            style={emptyStyles.button}
            label="作成する"
            onPress={() => {
              navigation.navigate('MemoCreate');
            }}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* MemoListが呼ばれる時には既にuseEffectが実行されている(useEffectはレンダリング後(マウウント時)に実行されるようだが、
      下階層のレンダリングより前に実行される様子) */}
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

const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // 両脇に同じサイズの枠が入る位置
  },
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 24,
  },
  button: {
    alignSelf: 'center',
  },
});
