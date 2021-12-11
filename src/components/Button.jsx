import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { func, string } from 'prop-types';

export default function Button(props) {
  const { label, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

// propTyepesのspell間違いに注意
Button.propTypes = {
  label: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
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
