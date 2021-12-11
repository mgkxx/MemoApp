import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoListDetailSc() {
  return (
    <View style={styles.container}>
      {/* ヘッダー */}
      <AppBar />
      {/* タイトルバー */}
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoData}>2020年12月24日 10:00</Text>
      </View>

      {/* 本文 */}
      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoText}>
          買い物リスト
          {'\n'}
          書体やレイアウトなどを確認するために用います。
          本文用なので使い方を間違えると不自然に見えることもありますので要注意。
        </Text>
      </ScrollView>

      {/* 編集ボタン */}
      {/* <CircleButton>👈</CircleButton> */}
      {/* styleを上書き */}
      <CircleButton
        style={{ top: 160, bottom: 'auto' }}
        name="fountain-pen-tip"
      />
    </View>
  );
}

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
