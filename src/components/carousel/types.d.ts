import type { StyleProp, ViewStyle } from 'react-native';

interface CarouselProps {
  items: { [key: string]: any }[];
  carouselStyle?: StyleProp<ViewStyle>; // Added carouselStyle prop
  itemStyle?: StyleProp<ViewStyle>; // Added itemStyle prop
  CarouselItem: React.FC<CarouselItemProps>;
}

interface CarouselItemProps {
  item: { [key: string]: any };
  itemStyle?: StyleProp<ViewStyle>;
}
