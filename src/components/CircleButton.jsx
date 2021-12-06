import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { string, shape } from 'prop-types';

export default function CircleB(props) {
  // 分割代入
  const { ic, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Text style={styles.circleButtonLabel}>{ic}</Text>
    </View>
  );
}

CircleB.propTypes = {
  ic: string.isRequired,
  // shapeはオブジェクトの形を定義する。
  // 何も指定指定していない場合はどんな形のオブジェクトでも受け入れる。
  style: shape(),
};

CircleB.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#467FD3',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
  },
  circleButtonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});
