import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import AppBar from '../components/AppBar';
import Btn from '../components/Button';

export default function LogIngScreen() {
  return (
    <View style={styles.container}>
      <AppBar />
      {/* Paddingなどを設定しやすいようにViewを設定 */}
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="Email Address" />
        <TextInput style={styles.input} value="PassWord" />
        {/* ボタン */}
        <Btn label="ok" />
        {/* 会員登録を促すメッセージ  flexboxを適用しやすいようにViewで囲む */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity>
            <Text style={styles.footerLlingk}>Sign up here!</Text>
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

// とりあえず自分でやっつけでデザインしたもの

// export default function LogIngScreen() {
//   return (
//     <View style={styles.container}>
//       <AppBar />
//       {/* Paddingなどを設定しやすいようにViewを設定 */}
//       <View style={{ flex: 1, padding: 20 }}>
//         <Text style={styles.loginText}>Log In</Text>
//         <TextInput value="Email Address" style={styles.textInput} />
//         <TextInput value="PassWord" style={styles.textInput} />
//         {/* ボタン */}
//         <View style={styles.btn}>
//           <Text>Submit</Text>
//         </View>
//         {/* 会員登録を促すメッセージ  flexboxを適用しやすいようにViewで囲む */}
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row', //配下のコンポーネントを変更ぽい
//             marginTop: 20,
//           }}
//         >
//           <Text style={{ marginRight: 5 }}>Not registered?</Text>
//           <Text>Sign up here!</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f0eeef',
//   },
//   loginText: {
//     fontSize: 25,
//   },
//   textInput: {
//     borderStyle: 'solid',
//     borderWidth: 1,
//     height: 40,
//     marginVertical: 10,
//   },
//   btn: {
//     borderStyle: 'solid',
//     // borderWidth: 1,
//     height: 40,
//     // width: 100, //alignSelf1を使うべき！
//     backgroundColor: '#64E8E0',
//     borderRadius: 4,
//     //alignItems: 'center', //配下のコンポーネントを変更ぽい
//     //justifyContent: 'center', //配下のコンポーネントを変更ぽい
//   },
// });
