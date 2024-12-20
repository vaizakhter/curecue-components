import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../styles';
import type { CarouselItemProps } from '../types';

const CarouselItem = ({ item, itemStyle }: CarouselItemProps) => {
  const defaultStyle = styles.item;
  const combinedStyle = itemStyle
    ? StyleSheet.compose(defaultStyle, itemStyle)
    : defaultStyle;

  return (
    <View style={combinedStyle}>
      <Text>{String(item.title)}</Text>
    </View>
  );
};

export default CarouselItem;
