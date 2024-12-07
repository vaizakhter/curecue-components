import { StyleSheet } from 'react-native';
import { ItemsWidth } from './helper/constrains';

export const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
  },
  item: {
    width: ItemsWidth,
    backgroundColor: 'red',
    margin: 10,
    height: 100,
  },
});
