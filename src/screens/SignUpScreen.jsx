// ユーザーの入力情報を保持するためにhooksを使う
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import firebase from 'firebase';

import Btn from '../components/Button';

export default function SignUpScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState(''); // 配列の中から取得している分割代入
  const [password, setPassword] = useState('');

  function handlePress() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      // 会員登録が成功したらthenの中のコールバック関数が実行される(thenはuserの情報が受け取れる)
      .then((userCredential) => {
        const { user } = userCredential; // コールバック関数で受け取ったuserCredentialの中からuserを取り出す
        console.log(user.uid);
        // login画面と同様にresetでstackを上書き
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      })
      // catchはエラーを引数で受け取ることができる
      .catch((error) => {
        console.log(error.code, error.message);
        Alert.alert(error.code);
      });
  }
  return (
    <View style={styles.container}>
      {/* Paddingなどを設定しやすいようにViewを設定 */}
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          // テキストが入力されるたびにcallback関数を実行(引数のtextはユーザーが入力した値)
          onChangeText={(text) => {
            setEmail(text);
          }}
          autoCapitalize="none" // 一文字めが大文字になる設定を無しにする
          keyboardType="email-address"
          placeholder="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          // アローファンクション：イベントが発生したときにそれをトリガーとして実行する関数
          onChangeText={(text) => {
            setPassword(text);
          }}
          autoCapitalize="none"
          placeholder="email-address"
          secureTextEntry // 入力文字が見えない設定
          // 実態はsecureTextEntry={true}(Reactのルールとして、trueの値は明記しなくもtrueと見なされる)
          textContentType="password"
        />
        {/* ボタン */}
        <Btn label="submit" onPress={handlePress} />
        {/* 会員登録を促すメッセージ  flexboxを適用しやすいようにViewで囲む */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'LogIn' }],
              });
            }}
          >
            <Text style={styles.footerLlingk}>Log In.</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // ReactNativeはflexが基本なので、宣言する必要はないが、画面全体を一つのboxと見なすため(背景色設定)に設定している感じかな。
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32, // 1行として扱う高さの幅(fontSizeは変わらない) heitht=24+8(half-leding:4)
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footer: {
    flexDirection: 'row', // reactNativeの基本はflexなので、flexを指定しなくてもdirectionで子要素を変更できるらしい。
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLlingk: {
    fontSize: 14,
    lineHeight: 24,
    color: '#64E8E0',
  },
});
