import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

import CircleButton from '../components/CircleButton';

// メモ編集画面
export default function MemoCreateScreen(props) {
  const { navigation } = props;

  return (
    <KeyboardAvoidingView style={Styles.container} behavior="height">
      <View style={Styles.container}>
        {/* メモ編集エリア */}
        <View style={Styles.inputContainer}>
          <TextInput value="" multiline style={Styles.input} />
        </View>
        <CircleButton
          name="check-decagram"
          onPress={() => {
            navigation.goBack();
          }}
        />
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
