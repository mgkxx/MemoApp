import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';

// メモ編集画面
export default function MemoCreateScreen(props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');

  function handlePress() {
    // 現在ログインしているユーザーを取得
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    // collectionを作成
    const ref = db.collection(`users/${currentUser.uid}/memos`);
    // ドキュメントを作成
    ref
      .add({
        // keyとvalueの名前が同じ時は省略(bodyText: 'bodyText')
        bodyText,
        // 現在時刻
        updatedAt: new Date(),
      })
      // 作成したdocumentの参照を受け取ることができる
      .then((docRef) => {
        console.log('created', docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log('error', error);
      });
  }

  return (
    <KeyboardAvoidingView style={Styles.container} behavior="height">
      <View style={Styles.container}>
        {/* メモ編集エリア */}
        <View style={Styles.inputContainer}>
          <TextInput
            value={bodyText}
            multiline
            style={Styles.input}
            onChangeText={(text) => {
              setBodyText(text);
            }}
            autoFocus
          />
        </View>
        <CircleButton name="check-decagram" onPress={handlePress} />
      </View>
    </KeyboardAvoidingView>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24,
  },
});
