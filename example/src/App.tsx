import { StyleSheet, SafeAreaView } from 'react-native';
import Carousel from 'react-native-curecue-components/Carousel';
import CarouselItem from 'react-native-curecue-components/CarouselItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        CarouselItem={CarouselItem}
        items={[{ title: 'Item 1' }, { title: 'Item 2' }, { title: 'Item 3' }]}
        itemStyle={styles.item}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: 'gray',
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
  },
});
