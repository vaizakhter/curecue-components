import { StyleSheet } from 'react-native';
import { itemsWidth } from './helper/constrains';

export const styles = StyleSheet.create({
  carousel: {
    flexDirection: 'row',
  },
  item: {
    width: itemsWidth,
    backgroundColor: 'red',
    height: 100,
  },
});
