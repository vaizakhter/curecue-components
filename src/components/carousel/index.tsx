import { styles } from './styles';
import {
  carouselIntervalWidth,
  itemsWidth as itemWidthDefault,
} from './helper/constrains';
import { FlashList } from '@shopify/flash-list';

import { View } from 'react-native';
import type { CarouselProps } from './types';
import { useCallback } from 'react';

const Carousel = ({
  items,
  carouselStyle,
  itemStyle,
  CarouselItem,
  itemWidth,
  snapInterval,
}: CarouselProps) => {
  const keyExtractor = useCallback(
    (item: any, i: number) => `${i}-${String(item)}`,
    []
  );

  const renderItem = ({ item }: { item: { [key: string]: string } }) => (
    <CarouselItem item={item} itemStyle={itemStyle} />
  );

  return (
    <View style={[styles.carousel, carouselStyle]}>
      <FlashList
        data={items}
        estimatedItemSize={itemWidth ?? itemWidthDefault}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={snapInterval ?? carouselIntervalWidth} // Adjust based on item width + margin
        decelerationRate="fast"
      />
    </View>
  );
};

export default Carousel;
