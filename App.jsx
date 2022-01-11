import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import firebase from 'firebase';

import MemoListScreen from './src/screens/MemoListScreen';
import MemoDetailScreen from './src/screens/MemoDetailScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import LogInScreen from './src/screens/LogInScreen';
import SignUpScreen from './src/screens/SignUpScreen';

// env.js読み込み
import { firebaseConfig } from './env';

require('firebase/firestore');

const stack = createStackNavigator();
LogBox.ignoreLogs(['setting a timer']); // 無視する警告

// firebase.apps.lengthで、すでに初期化されているアプリの数を取得する事ができる
if (firebase.apps.length === 0) {
  // firebase初期化
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="LogIn"
        screenOptions={{
          headerStyle: { backgroundColor: '#64E8E0' }, // ヘッダーの色
          headerTitleStyle: { color: '#ffffff' }, // タイトルのフォント色
          headerTitle: 'Memo App', // タイトル文字
          headerTintColor: '#ffffff', // 左上の戻るボタンの色
          headerBackTitle: 'Back', // 左上の戻るボタンの文字(iosのみ)
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, // 遷移時の挙動(右スクロール)
          gestureEnabled: true, // スワイプで戻れる(iosのみデフォルト)
          gestureDiredtion: 'horizontal', // スワイプで戻れる(iosのみデフォルト)
        }}
      >
        <stack.Screen name="MemoList" component={MemoListScreen} />
        <stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
        <stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            cardStyleInterpolator:
              CardStyleInterpolators.forFadeFromBottomAndroid,
          }}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

// logIn,SighIn => MemoListScr & MemoListComp => MemoDetail => MemoEdit
//                                            => MemoCreate
