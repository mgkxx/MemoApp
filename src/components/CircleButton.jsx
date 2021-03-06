import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function CircleB(props) {
  // 分割代入
  const { style, name, onPress } = props;
  return (
    // ViewにonPressプロパティ？が無いので、TouchableOpacityを使う
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      {/* <Text style={styles.circleButtonLabel}>{ic}</Text> */}
      <MaterialCommunityIcons name={name} size={32} color="white" />
    </TouchableOpacity>
  );
}

CircleB.propTypes = {
  // shapeはオブジェクトの形を定義する。
  // 何も指定指定していない場合はどんな形のオブジェクトでも受け入れる。
  style: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleB.defaultProps = {
  style: null,
  onPress: null,
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
