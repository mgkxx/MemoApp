import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoLst() {
  //  useNavigationはhookなので、使用するコンポーネント内で変数セットを行わないとエラーになるっぽい。
  const navigation = useNavigation(); // MemoLst(){}の外側に配置するとエラー

  return (
    <View>
      {/* MemoListComponentはnavigationというプロパティを受け取ることができない */}
      {/* NavigationContainer内に明記されている「Stack."Screen"」のComponentしか受け取れない */}
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年10月30日</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete}>
          <MaterialCommunityIcons
            name="close-box-multiple-outline"
            size={16}
            color="#B0B0B0"
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年10月30日</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete}>
          <MaterialCommunityIcons
            name="close-box-multiple-outline"
            size={16}
            color="#B0B0B0"
          />
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          navigation.navigate('MemoDetail');
        }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020年10月30日</Text>
        </View>
        <TouchableOpacity style={styles.memoDelete}>
          <MaterialCommunityIcons
            name="close-box-multiple-outline"
            size={16}
            color="#B0B0B0"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.15)',
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: '#848484',
  },
  memoDelete: {
    padding: 8,
  },
});
