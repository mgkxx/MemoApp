import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { dateToString } from '../utils';

export default function MemoLst(props) {
  const { memos } = props;
  // {/* MemoListComponentはnavigationというプロパティを受け取ることができない */}
  //  useNavigationはhookなので、使用するコンポーネント直下で変数セットを行わないとエラーになるっぽい。
  const navigation = useNavigation();

  // FlatListのrenderItem docを参照
  function renderItem({ item }) {
    // function renderItem( item ) {
    return (
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => {
          // 「, { id: item.id }」 idを渡している
          navigation.navigate('MemoDetail', { id: item.id });
        }}
      >
        <View>
          {/* numberOfLines はTextの中身を1行のみ表示させる */}
          <Text style={styles.memoListItemTitle} numberOfLines={1}>
            {item.bodyText}
          </Text>
          <Text style={styles.memoListItemDate}>
            {/* date型だとエラーになるのでString変換 */}
            {dateToString(item.updatedAt)}
          </Text>
        </View>
        <TouchableOpacity style={styles.memoDelete}>
          <MaterialCommunityIcons
            name="close-box-multiple-outline"
            size={16}
            color="#B0B0B0"
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  }

  // レンダリング
  return (
    <View styleJ={styles.container}>
      {/* FlatListhは画面に表示される分、data配列分レンダリングする */}
      <FlatList
        data={memos}
        renderItem={renderItem} // renderItemを呼び出すとき、{item}を渡してないけど、FlatListのdataが入る？
        keyExtractor={(item) => item.id} // リストを表示させるときは、keyを設定する必要がある(Reactのルール)
      />
    </View>
  );
}

MemoLst.propTypes = {
  // arrayOfは配列の型
  // オブジェクトを内包した配列
  memos: arrayOf(
    shape({
      id: string,
      bodyText: string,
      updatedAt: instanceOf(Date),
      // eslint-disable-next-line
    })
  ).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
