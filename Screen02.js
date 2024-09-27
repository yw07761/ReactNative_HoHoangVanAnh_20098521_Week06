import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Image,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons for icons

const DATA = [
  {
    id: 1,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    rating: 4,
    Image: require('./assets/Screen2_1.png'),
  },
  {
    id: 2,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    rating: 4,
    Image: require('./assets/Screen2_2.png'),
  },
  {
    id: 3,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    rating: 4,
    Image: require('./assets/Screen2_3.png'),
  },
  {
    id: 4,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    rating: 4,
    Image: require('./assets/Screen2_4.png'),
  },
  {
    id: 5,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    rating: 4,
    Image: require('./assets/Screen2_5.png'),
  },
  {
    id: 6,
    title: 'Cáp chuyển từ cổng USP sang PS2...',
    price: '69.000đ',
    discount: '-39%',
    rating: 4,
    Image: require('./assets/Screen2_6.png'),
  },
];

const Item = ({ title }) => {
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Icon
          key={i}
          name={i <= rating ? 'star' : 'star-outline'} // filled star for rating or outlined for the rest
          size={15}
          color={i <= rating ? '#ffd700' : '#ccc'} // Gold for filled stars, gray for empty
          style={{ marginRight: 2 }} // add space between stars
        />
      );
    }
    return stars;
  };
  return (
    <View style={styles.item}>
      <Image source={title.Image} style={{ height: 80, width: 150 }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title.title}</Text>
        <View style={styles.ratingContainer}>
          {renderStars(title.rating)}(15)
        </View>
        <View style={styles.priceDiscountContainer}>
          <Text style={styles.price}>{title.price}</Text>
          <Text style={styles.discount}>{title.discount}</Text>
        </View>
      </View>
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Back Button */}
        <Icon name="arrow-back" size={25} color="white" style={styles.icon} />

        {/* Search Input Field */}
        <View style={styles.inputContainer}>
          <Icon
            name="search"
            size={20}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.input}
            placeholder="Dây cáp Usb"
            placeholderTextColor="#888"
          />
        </View>

        {/* Cart and List Icons */}
        <Icon name="cart" size={25} color="white" style={styles.icon} />
        <Icon name="list" size={25} color="white" style={styles.icon} />
      </View>

      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Display 2 items per row
      />

      <View style={styles.footer}>
        <Icon name="list" size={25} color="black" style={styles.icon} />
        <Icon name="home" size={25} color="black" style={styles.icon} />
        <Icon name="arrow-back" size={25} color="black" style={styles.icon} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    height: 50,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  icon: {
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 20,
    paddingHorizontal: 10,
  },
  searchIcon: {
    marginRight: 5,
  },
  input: {
    height: 40,
    flex: 1,
    color: 'black',
  },
  item: {
    margin: 2,
    flex: 1,
    maxWidth: '48%',
    borderRadius: 5,
  },
  textContainer: {
    flexDirection: 'column',
    marginTop: 5,
  },
  title: {
    fontSize: 12,
    marginBottom: 5,
  },
  priceDiscountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 12,
    color: 'red',
    marginRight: 10,
  },
  discount: {
    fontSize: 11,
    color: 'gray',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#3498db',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
  },
});

export default App;
