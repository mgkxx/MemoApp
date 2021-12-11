import React from 'react';
import { View, Text, StyleSheet, string } from 'react-native';

export default function Button(props) {
  const { label } = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </View>
  );
}

// propTyepesのspell間違いに注意
Button.propTypes = {
  label: string.isRequired,
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#64E8E0',
    borderRadius: 4,
    alignSelf: 'flex-start', // 自分自身を並べる(alignItemの自分要素版。親要素にflexが適用されていないくてもブロックを作成できる。reactNativeの基本がflexだから？)
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8, // paddingを偶数で設定すると要素が真ん中に配置される
    paddingHorizontal: 32, // paddingを偶数で設定すると要素が真ん中に配置される
    color: '#ffffff',
  },
});
