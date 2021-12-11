import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

import AppBar from '../components/AppBar';
import Btn from '../components/Button';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      {/* Paddingなどを設定しやすいようにViewを設定 */}
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="PassWord" />
        {/* ボタン */}
        <Btn label="submit" />
        {/* 会員登録を促すメッセージ  flexboxを適用しやすいようにViewで囲む */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registered?</Text>
          <Text style={styles.footerLlingk}>Log In.</Text>
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
