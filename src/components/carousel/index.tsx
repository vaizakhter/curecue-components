import { styles } from './styles';
import { CarouselIntervalWidth, ItemsWidth } from './helper/constrains';
import { FlashList } from '@shopify/flash-list';

import { View } from 'react-native';
import type { CarouselProps } from './types';

export const Carousel = ({
  items,
  carouselStyle,
  itemStyle,
  CarouselItem,
}: CarouselProps) => {
  const renderItem = ({ item }: { item: { [key: string]: string } }) => (
    <CarouselItem item={item} itemStyle={itemStyle} />
  );

  return (
    <View style={[styles.carousel, carouselStyle]}>
      <FlashList
        data={items}
        estimatedItemSize={ItemsWidth}
        renderItem={renderItem}
        keyExtractor={(index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={CarouselIntervalWidth} // Adjust based on item width + margin
        decelerationRate="fast"
      />
    </View>
  );
};
