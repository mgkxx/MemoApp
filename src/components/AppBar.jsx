import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// reactのコンポーネントは、全て関数で定義される。
// "export default"は、他のファイルから呼び出したいコンポーネントにつける定型分(impot appbar.jsとできるようになる)
export default function App() {
  //  関数は値を返却するものなので、returnで返却する
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarTitle}>MemoApp</Text>
        <Text style={styles.appbarRight}>ログアウト</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#64E8E0',
    justifyContent: 'flex-end',
  },
  appbarInner: {
    alignItems: 'center',
  },
  // 直親要素に対してのポジション操作1(右から19,下から8)
  appbarRight: {
    position: 'absolute',
    right: 19,
    bottom: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 24,
    lineHeight: 32,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
