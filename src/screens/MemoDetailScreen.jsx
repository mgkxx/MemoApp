import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import firebase from 'firebase';
import { shape, string } from 'prop-types';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoListDetailSc(props) {
  const { navigation, route } = props; // routeにオブジェクト{ id: item.id }が格納されている
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  // レンダリング後、idを元にデータ、更新日時を取得
  useEffect(() => {
    // ログインユーザーを取得
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {}; // 空の配列
    if (currentUser) {
      // DBアクセス
      const db = firebase.firestore();
      // documentoまでのreferenceを取得(パス取得のような感じっぽい)
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      // データを取得 docまでのrefを取得しているので、単一のデータを取得(docに返却) callback
      unsubscribe = ref.onSnapshot((doc) => {
        console.log(doc.id, doc.data());
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(), // タイムスタンプ型の日付を取得するので、変換
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      {/* タイトルバー */}
      <View style={styles.memoHeader}>
        {/* &&:左辺がtrueの場合に右辺の値を返却する */}
        <Text style={styles.memoTitle}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoData}>
          {memo && dateToString(memo.updatedAt)}
        </Text>
      </View>

      {/* 本文 */}
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>{memo && memo.bodyText}</Text>
      </ScrollView>

      {/* 編集ボタン */}
      {/* styleを上書き */}
      <CircleButton
        style={{ top: 60, bottom: 'auto' }}
        name="fountain-pen-tip"
        // アローファンクションを使用する理由...
        // アローファンクションを削除すると警告 Cannot update a component from...
        onPress={() => {
          navigation.navigate('MemoEdit');
        }}
      />
    </View>
  );
}

MemoListDetailSc.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

// console.log(route)
// Object {
//   "key": "MemoDetail-Nwjna4bI-2-cVn4ttFOYr",
//   "name": "MemoDetail",
//   "params": Object {
//     "id": "DCGCgqrhfmgfAESyEvmO",
//   },
//   "path": undefined,
// }

const styles = StyleSheet.create({
  container: {
    // flex:1で、全体を一つのbox1とする
    flex: 1,
    backgroundColor: '#ffffff',
  },
  memoHeader: {
    backgroundColor: '#64E8E0',
    height: 96,
    justifyContent: 'center',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: '#ffffff',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoData: {
    color: '#ffffff',
    fontSize: 12,
    lineHeight: 16,
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
