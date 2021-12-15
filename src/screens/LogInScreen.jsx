// ユーザーの入力情報を保持するためにhooksを使う
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Btn from '../components/Button';

export default function LogIngScreen(props) {
  const { navigation } = props;
  // "email"は保持しておきたい値、"setEmail"は保持しておきたい値を更新する為のfunctionが返却されている
  const [email, setEmail] = useState(''); // 配列の中から取得している分割代入
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Paddingなどを設定しやすいようにViewを設定 */}
      <View style={styles.inner}>
        {/* タイトル */}
        <Text style={styles.title}>Log In</Text>
        {/* 入力テキスト */}
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
        <Btn
          label="submit"
          // 左上の戻るボタンを削除するためにnavigationのstackを削除
          onPress={() => {
            // resetメソッドはroutesの内容でstackを上書く。(それ以前のstackは削除される)
            navigation.reset({
              index: 0, // routesの配列の中から、表示するインデックスを指定
              routes: [{ name: 'MemoList' }],
            });
          }}
        />
        {/* 会員登録を促すメッセージ  flexboxを適用しやすいようにViewで囲む */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignUp' }],
              });
            }}
          >
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
